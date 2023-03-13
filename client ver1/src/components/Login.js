import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if(res.status === 400 || !data) {
      window.alert("Invalid credential")
    } else {
      window.alert("Login success")
      navigate("/")
    }
  };
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
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form-buttom">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Login"
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
