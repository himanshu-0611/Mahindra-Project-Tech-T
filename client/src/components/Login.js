import React from 'react'
import { NavLink } from "react-router-dom";


function Login() {
  return (
    <div>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              {/* <figure>
                <img src="" alt="" />
              </figure> */}
              <NavLink to="/Signup" className="signin-image-link">
                Click here for a New Registration
              </NavLink>
            </div>
            <div className="signin-form">
              <h2>Login</h2>
            </div>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group form-buttom">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login