import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import app_config from "../config";

const Signup = () => {
  const url = app_config.api_url;

  const signupForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const SignupSubmit = (formdata) => {
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee;" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderRadius: "25px;" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>{" "}
                      <Formik
                        initialValues={signupForm}
                        onSubmit={SignupSubmit}
                      >
                        {({ values, handleSubmit, handleChange }) => (
                          <form classNameName="" onSubmit={handleSubmit}>
                            {/* <div classNameName="d-flex justify-content-center">
                              <input
                                classNameName="d-flex justify-content-center"
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={values.name}
                                onChange={handleChange}
                              />
                            </div>
                            <br />
                            <div classNameName="d-flex justify-content-center">
                              <input
                                classNameName="d-flex justify-content-center"
                                type="Email"
                                name="email"
                                placeholder="Enter Email"
                                value={values.email}
                                onChange={handleChange}
                              />
                            </div>
                            <br />
                            <div classNameName="d-flex justify-content-center">
                              <input
                                classNameName="d-flex justify-content-center"
                                type="Number"
                                name="phone"
                                placeholder="Enter Phone Number"
                                value={values.phone}
                                onChange={handleChange}
                              />
                            </div>
                            <br />
                            <div classNameName="d-flex justify-content-center">
                              <input
                                classNameName="d-flex justify-content-center"
                                type="Password"
                                name="password"
                                placeholder="Enter Password"
                                value={values.password}
                                onChange={handleChange}
                              />
                            </div>
                            <br />

                            <div classNameName="d-flex justify-content-center">
                              <button type="submit">Submit</button>
                            </div> */}

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  class="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Enter Name"
                                  value={values.name}
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example1c">
                                  Your Name
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  class="form-control"
                                  type="email"
                                  name="email"
                                  placeholder="Enter Email"
                                  value={values.email}
                                  onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example3c">
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="password"
                                  class="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={values.password}
                                onChange={handleChange}
                                />
                                <label class="form-label" for="form3Example4c">
                                  Password
                                </label>
                              </div>
                            </div>



                            <div class="form-check d-flex justify-content-center mb-5">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                class="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://cdn2.hubspot.net/hubfs/53/ecommerce%20marketing.jpg"
                        className="img-fluid"
                        alt="Sample image"
                      />
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

export default Signup;
