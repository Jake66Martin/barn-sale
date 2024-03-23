import './login.css'
import { Link } from 'react-router-dom';
import UserLogin from '../../components/userLogin/index';

function Login() {

    return (

         <section className="bg-light py-3 py-md-5 py-xl-8 login-height d-flex align-items-center">
              <div className="container">
                   <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                             <div className="mb-5">
                                  <h2 className="text-center mb-4 display-5">Login</h2>
                             </div>
                             <div className="card border border-light-subtle rounded-4">
                                  <div className="card-body p-3 p-md-4 p-xl-5">

                                       <UserLogin />

                                  </div>
                             </div>
                             <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                                  <p className="m-0 text-secondary text-center">Need an account? <Link to="/register" className="link-danger text-decoration-none">Register here</Link></p>
                             </div>
                        </div>
                   </div>
              </div>
         </section>

    );
}

export default Login;