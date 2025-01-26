require('dotenv').config();

const express = require('express');
const {expressMiddleware} = require('@apollo/server/express4');
const path = require('path');
const {ApolloServer} = require('@apollo/server');
const {authMiddleware} = require('./utils/auth.js');
const {graphqlUploadExpress} = require('graphql-upload')
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);
const webhook = process.env.WEBHOOK
const cors = require('cors');





const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(graphqlUploadExpress());

    app.use(cors({
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    }));

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    

    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware,
    }));



    app.post('/create-checkout-session', async (req, res) => {
        const { cartItems, method } = req.body;
        
        const taxRate = await stripe.taxRates.create({
          display_name: 'HST',
          percentage: 13.0, // VAT percentage
          inclusive: false, // If true, tax is included in the price
          country: 'CA', // Specify country
          state: 'ON', // Optional: specify a state (if applicable)
        });
        
        try {

          console.log("Cart Items:", cartItems);
          
          const lineItems = cartItems.map(item => {
            console.log("Item price:", item);
            
            return {
              price_data: {
                currency: 'cad',
                product_data: {
                  name: item.price_data.product_data.name,
                },
                unit_amount: item.price_data.unit_amount,
              },
              quantity: item.quantity,
              tax_rates: [taxRate.id],
            };
          });
    
          // Add a delivery fee if applicable
          if (method === 'Hands Free Delivery') {
            lineItems.push({
              price_data: {
                currency: 'cad',
                product_data: {
                  name: 'Hands Free Delivery Fee',
                },
                unit_amount: 9500, // $95 in cents
              },
              quantity: 1,
              tax_rates: [taxRate.id],
            });
          } else if (method === 'Front Door Delivery') {
            lineItems.push({
              price_data: {
                currency: 'cad',
                product_data: {
                  name: 'Front Door Delivery Fee',
                },
                unit_amount: 4500, // $45 in cents
              },
              quantity: 1,
              tax_rates: [taxRate.id],
            });
          }

          
    
          // Create a Stripe Checkout session
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,

            mode: 'payment',
            // success_url: `${process.env.CLIENT_URL2}/success?session_id={CHECKOUT_SESSION_ID}`,
            // cancel_url: `${process.env.CLIENT_URL2}/cancel`,
            success_url: `${process.env.CLIENT_URL2}`,
            cancel_url: `${process.env.CLIENT_URL2}`,

            shipping_address_collection: {
              allowed_countries: ['CA'], // Limit to these countries
            },

            

            
          });
    
          res.status(200).json({ url: session.url });
        } catch (error) {
          console.log("Request body:", req.body);
          console.error('Error creating checkout session:', error);
          res.status(500).json({ error: 'Failed to create checkout session' });
        }
      });



      app.post('/stripe-webhook', express.raw({ type: 'application/json' }), async (req, res) => {
        const sig = req.headers['stripe-signature'];

        let event;

        // Verify the webhook signature
        try {
            event = stripe.webhooks.constructEvent(req.body, sig, webhook);
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        // Handle the event based on its type
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                if (session.payment_status === 'paid') {
                  // Payment was successful
                  console.log('Payment was successful:', session);
      
                  
              } else {
                  // Handle the case where the payment was not successful
                  console.log('Payment failed or was not completed successfully:', session);
              }


              res.status(200).json({ success: true, message: "Payment successful" });
                break;

            // Handle other events if needed
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        // Respond to Stripe with a 200 status code to acknowledge receipt of the event
        res.json({ received: true });
    });

      



    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist', 'index.html'))
        });
    }

    // db.sync({force: false}).then(() => {
    //     app.listen(PORT,   () => {
    //         // app.listen(PORT, '0.0.0.0',  () => {
    //         console.log(`API servers running on port ${PORT}`);
    //         console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
    //     });
    // });

    if (process.env.NODE_ENV !== 'production') {
        db.sync({force: false}).then(() => {
            app.listen(PORT, '0.0.0.0', () => {
                console.log(`API servers running on port ${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
            });
        });
    } else {
        // Just start the app without syncing in production
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`API servers running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
        });
    }
};

startApolloServer();






