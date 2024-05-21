import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import Swal from "sweetalert2";

export default function UserLogin() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);
  const [pageName, setPageName] = useState("index.jsx");


  useEffect(() => {
    document.title = "Thrift-Barn-Furniture"; 
    if (pageName === "index.jsx") {
      document.title = "Login";}


    return () => {
      document.title = "Thrift-Barn-Furniture";
    };
  }, [pageName]);


  const handleEmpty = (event) => {
     const {name, value} = event.target;
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
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Authentication failed!",
        text: e.message,
        showConfirmButton: false,
        timer: 2500,
      });
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="row gy-3 overflow-hidden">
        <div className="flex-row space-between my-2">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="youremail@lost-pets.com"
                value={formState.email}
                name="email"
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
                placeholder="******"
                name="password"
                value={formState.password}
                type="password"
                id="pwd"
                onChange={handleChange}
                onBlur={handleEmpty}
              />
              <label htmlFor="pwd" className="form-label">
                Password:
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="btn btn-danger btn-lg" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}