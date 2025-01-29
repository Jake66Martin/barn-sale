import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { USER_EMAIL } from "../../utils/queries";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Registration() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const { loading, error, data } = useQuery(USER_EMAIL, {
    variables: { email: formState.email },
  });
  const [isClicked, setIsClicked] = useState(false);
  const triggerRef = useRef(null);
  const [pageName, setPageName] = useState("index.jsx");



  const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    document.title = "Thrift-Barn-Furniture";
    if (pageName === "index.jsx") {
      document.title = "Register";
    }

    return () => {
      document.title = "Thrift-Barn-Furniture";
    };
  }, [pageName]);

  useEffect(() => {
    const outsideClick = (event) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", outsideClick);

    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleEmpty = (event) => {
    const { name, value } = event.target;
    if (name === "email" && value === "") {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Must fill email field.",
        text: event.message,
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (name === "password" && value === "") {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Must fill password field.",
        text: event.message,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = data?.userEmail || {};
      console.log(userData);

      if (
        !emailValidation.test(formState.email) &&
        passwordValidation.test(formState.password)
      ) {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Must provide a valid email.",
          text: event.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }

      if (
        emailValidation.test(formState.email) &&
        !passwordValidation.test(formState.password)
      ) {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title:
            "Password must be of 8 characters minimum. Must contain one of each lowercase, uppercase, digit, and special character.",
          text: event.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }

      if (
        !emailValidation.test(formState.email) &&
        !passwordValidation.test(formState.password)
      ) {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Neither email nor password conform to the rules.",
          text: event.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }

      if (userData === true) {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "User with this email already exists. Please choose another.",
          text: event.message,
          showConfirmButton: false,
          timer: 2500,
        });
      }
      

      const mutationResponse = await addUser(
        {
        variables: {
          email: formState.email,
          password: formState.password,
        },
        }
        );
  
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * This will listen for any changes on the form and set the state of the form (formState). The source
   * it is contained in the event.target
   * @param {*} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ 
      ...formState, 
      [name]: name === "email" ? value.toLowerCase() : value, 
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="row gy-3 overflow-hidden">
        
        <div className="flex-row space-between my-2">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="youremail@thrift-barn.com"
                name="email"
                value={formState.email}
                type="text"
                id="email"
                onChange={handleChange}
                onBlur={handleEmpty}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="flex-row space-between my-2">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="*****"
                name="password"
                value={formState.password}
                type="password"
                id="pwd"
                onChange={handleChange}
                onBlur={handleEmpty}
                onClick={handleClick}
                ref={triggerRef}
              />
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
              <div>
                {isClicked && (
                  <p className="text-center">
                    Password must have minimum of 8 characters, and one of each
                    lower/upper/digit/special char.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="d-grid">
            <button className="btn btn-danger btn-lg" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
      
    </Form>
  );
}