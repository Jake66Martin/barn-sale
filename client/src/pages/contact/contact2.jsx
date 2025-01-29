import styles from "./contact2.module.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { SUBMIT_EMAIL} from '../../utils/mutations.js';
import { useMutation } from "@apollo/client";




export default function Contact2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitContactForm] = useMutation(SUBMIT_EMAIL);


  const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

  const handleChange = (event) => {
    const { name, value } = event.target;

    return name === "fullname"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);
  };


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const formSubmit = async (event) => {
    event.preventDefault()
    try {
      if (name === "" || email === "" || message === "") {
        Swal.fire({
             position: "center-center",
             icon: "error",
             title: "Must fill in required fields.",
             showConfirmButton: false,
             timer: 2500,
           });
       } else if (!emailValidation.test(email)) {
        Swal.fire({
             position: "center-center",
             icon: "error",
             title: "Please enter a valid email.",
             showConfirmButton: false,
             timer: 2500,
           });
       } else {

         setName("");
         setEmail("");
         setMessage("");
         Swal.fire({
           position: "center-center",
           icon: "success",
           title: "Your message has been sent",
           showConfirmButton: false,
           timer: 2500,
         });
        }

        const sentEmail = await submitContactForm({
          variables: {
            name,
            email,
            message
          }
        });
        console.log(sentEmail)

        return sentEmail

    } catch (err) {
       console.log(err)
    }
  };



  function smallIcons() {
    if (windowWidth < 700) {
      return (
        <>
          <div className={`${styles.cell1}`}>
            <img
              className={`${styles.icon}`}
              src="phoneicon.png"
              alt="phone icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <img
              className={`${styles.icon}`}
              src="barnicon.png"
              alt="barn icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            className={`${styles.cell2}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              position: 'relative'
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Text or call 24/7 -365:
              </span>
              <br />
              613-805-8228
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px',
                top: '10px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino} ${styles.downnum}`}
            >
              <span style={{ color: "#da0404", fontWeight: "600" }}>
                Address:
              </span>{" "}
              <br />
              2786 Highway 34 <br />
              Hawkesbury, Ontario <br />
              K6A 0E5
            </p>
          </div>
          <div className={`${styles.cell3}`}>
            <img
              className={`${styles.icon}`}
              src="hoursicon.png"
              alt="clock icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <img
              className={`${styles.icon}`}
              src="mailicon.png"
              alt="email icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </div>
          <div
            className={`${styles.cell4}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              position: 'relative'
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino} ${styles.downdo}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                In-Store Hours:
              </span>
              <br />
              Sunday: 8AM - 8PM <br />
              
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
                position: 'relative',
                right: '12px'
              }}
              className={`${styles.textstyle2} ${styles.infop} ${styles.lino} ${styles.emailo}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Email:
              </span>
              <br />
              Thriftbarnfurniture
              <br />
              @gmail.com
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${styles.cell1}`}>
            <img
              className={`${styles.icon}`}
              src="phoneicon.png"
              alt="phone icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Text or call 24/7 -365:
              </span>
              <br />
              613-805-8228
            </p>
          </div>
          <div className={`${styles.cell2}`}>
            <img
              className={`${styles.icon}`}
              src="barnicon.png"
              alt="barn icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span style={{ color: "#da0404", fontWeight: "600" }}>
                Address:
              </span>{" "}
              <br />
              2786 Highway 34<br />
              Hawkesbury, Ontario <br />
              K6A 0E5
            </p>
          </div>
          <div className={`${styles.cell3}`}>
            <img
              className={`${styles.icon}`}
              src="hoursicon.png"
              alt="clock icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                In-Store Hours:
              </span>
              <br />
              Sunday: 8AM - 8PM <br />
              
            </p>
          </div>
          <div className={`${styles.cell4}`}>
            <img
              className={`${styles.icon}`}
              src="mailicon.png"
              alt="email icon"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <p
              style={{
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "2",
              }}
              className={`${styles.textstyle2} ${styles.infop}`}
            >
              <span
                style={{
                  color: "#da0404",
                  textAlign: "center",
                  fontWeight: "600",
                }}
                className={`${styles.textstyle2}`}
              >
                Email:
              </span>
              <br />
              Thriftbarnfurniture@gmail.com
            </p>
          </div>
        </>
      );
    }
  }

  function smallContact() {
    if (windowWidth < 1067) {
      return (
        <>
          <div className={`${styles.smallcell5}`}>
            <div
              style={{
                alignSelf: "center",
                justifySelf: "center",
                position: "relative",
              }}
            >
              <h2
                className={`${styles.textstyle} ${styles.subtit}`}
                style={{
                  color: "#720909",
                  fontSize: "35px",
                  margin: "15px 0",
                  textAlign: "center",
                }}
              >
                Contact Us
              </h2>
              <p
                className={`${styles.textstyle2} ${styles.subp}`}
                style={{ textAlign: "center" }}
              >
                Contact us whenever you want, however you want! <br/>
                We pride ourselves on fostering a stress free customer
                <br />
                customer service experience, we will get back to you as soon <br/>
                as possible and thank you for supporting Thrift Barn Furniture. <br />
                
              </p>
              <img
                src="decor.jpg"
                alt="image"
                className={`${styles.decimg}`}
                style={{ margin: "15px 0" }}
              />
            </div>
          </div>
          <div className={`${styles.smallcell6}`}>
            <form
              style={{
                lineHeight: "2",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <label style={{ display: "block" }}>Full Name</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
                value={name}
                id="fullname"
                      name="fullname"
                      onChange={handleChange}
                      required
              ></input>
              <label style={{ display: "block" }}>Email</label>
              <input
                type="email"
                value={email}
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
                id="email"
                        name="email"
                        onChange={handleChange}
                        required
              ></input>
              <label style={{ display: "block" }}>Message</label>
              <textarea
                type="text"
                style={{
                  display: "block",
                  width: "700px",
                  height: "300px",
                  resize: "none",
                }}
                className={`${styles.inputwidth} ${styles.inputheight}`}
                value={message}
                onChange={handleChange}
                id="message"
                name="message"
                required
              ></textarea>
              <button
                type="submit"
                style={{ display: "block", margin: "12px auto" }}
                onClick={formSubmit}
              >
                Submit Message
              </button>
            </form>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${styles.cell5}`}>
            <div style={{ alignSelf: "center", justifySelf: "center" }}>
              <h2
                className={`${styles.textstyle} ${styles.subtit}`}
                style={{ color: "#720909", fontSize: "35px", margin: "15px 0" }}
              >
                Lorum Ipsum
              </h2>
              <p className={`${styles.textstyle2} ${styles.subp}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                dapibus mollis nisl <br />
                in mollis. Vivamus malesuada augue ut tincidunt dapibus. Donec
                posuere elementum <br />
                velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
                dignissim ullamcorper
                <br />
                nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
                libero.
                <br />
                velit, eu dignissim dui viverra non. Sed ac sagittis ex. Duis
                dignissim ullamcorper
                <br />
                nibh, quis rhoncus neque lacinia id. Aliquam laoreet fermentum
                libero.
              </p>
              <img
                src="decor.jpg"
                alt="image"
                className={`${styles.decimg}`}
                style={{ margin: "15px 0" }}
              />
            </div>
          </div>
          <div className={`${styles.cell6}`}>
            <form
              style={{
                lineHeight: "2",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <label style={{ display: "block" }}>Full Name</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Email</label>
              <input
                type="text"
                style={{ display: "block", width: "700px" }}
                className={`${styles.inputwidth}`}
              ></input>
              <label style={{ display: "block" }}>Message</label>
              <textarea
                type="text"
                style={{
                  display: "block",
                  width: "700px",
                  height: "300px",
                  resize: "none",
                }}
                className={`${styles.inputwidth}`}
              ></textarea>
              <button
                type="submit"
                style={{ display: "block", margin: "12px 0" }}
                onClick={formSubmit}
              >
                Submit Message
              </button>
            </form>
          </div>
        </>
      );
    }
  }

  return (
    <section>
      <div className={`${styles.banner}`}>
        <h1 className={`${styles.textstyle}`} style={{ color: "white" }}>
          Contact Us Anytime
        </h1>
      </div>
      <div className={`${styles.mheight}`}>
       
        {smallIcons()}
        {smallContact()}
        <div className={`${styles.cell7}`}></div>
      </div>
    </section>
  );
}
