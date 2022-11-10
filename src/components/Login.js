import { Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const url = app_config.api_url;
  const loginForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = (formdata) => {
    console.log(formdata);
    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/check-login", reqOpt)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have loggedin successfully!",
          }).then(() => {
            navigate("/");
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is incorrect!",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#9A616D;" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem;" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://thumbs.dreamstime.com/z/online-store-vertical-banner-copy-space-vertical-banner-copy-space-people-characters-shopping-buying-goods-143197645.jpg"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <Formik initialValues={loginForm} onSubmit={LoginSubmit}>
                        {({ values, handleSubmit, handleChange }) => (
                          <form onSubmit={handleSubmit}>
                            <>
                              <div className="d-flex align-items-center mb-3 pb-1">
                                <i
                                  className="fas fa-cubes fa-2x me-3"
                                  style={{ color: "#ff6219" }}
                                />
                                <span className="h1 fw-bold mb-0">XenonStack</span>
                              </div>
                              <h5
                                className="fw-normal mb-3 pb-3"
                                style={{ letterSpacing: 1 }}
                              >
                                Sign into your account
                              </h5>
                              <div className="form-outline mb-4">
                                <input
                                  className="form-control form-control-lg"
                                  type="email"
                                  id="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  placeholder="Email"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example17"
                                >
                                  Email address
                                </label>
                              </div>
                              <div className="form-outline mb-4">
                                <input
                                  className="form-control form-control-lg"
                                  type="password"
                                  id="password"
                                  value={values.password}
                                  onChange={handleChange}
                                  placeholder="Password"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example27"
                                >
                                  Password
                                </label>
                              </div>
                              <div className="pt-1 mb-4">
                                <button
                                  className="btn btn-dark btn-lg btn-block"
                                  type="Submit"
                                >
                                  Login
                                </button>
                              </div>
                              <a className="small text-muted" href="#!">
                                Forgot password?
                              </a>
                              <p
                                className="mb-5 pb-lg-2"
                                style={{ color: "#393f81" }}
                              >
                                Don't have an account?{" "}
                                <NavLink to="/signup" style={{ color: "#393f81" }}>
                                  Register here
                                </NavLink>
                              </p>
                              <a href="#!" className="small text-muted">
                                Terms of use.
                              </a>
                              <a href="#!" className="small text-muted">
                                Privacy policy
                              </a>
                            </>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
