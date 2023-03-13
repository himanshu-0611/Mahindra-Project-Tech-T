import React, { useState } from "react";
import { NavLink} from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault(); // avoid automatic reload behaviour
    const { name, email, phone, work, password, cpassword } = user; // object destructuring
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      //data has to be sent in form on string to server, it doesn't understand json
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }), //both key value same, so we don't need to write name:name
    });
    //verify response
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      console.log(res)
      console.log(data)
      window.alert("Reg Success");
      console.log("Reg Success");
      setUser({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
      });
      //goes to login page when reg success
      // history.push("/login");
    }
  };

  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign Up</h2>
            </div>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={PostData}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Enter Contact Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">Profession</label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Enter Profession"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="text"
                  name="cpassword"
                  id="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Enter Password Again"
                />
              </div>
              {/* <div className="form-group form-buttom">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                  onClick={PostData}
                />
              </div> */}
              <button>Submit</button>
            </form>
          </div>
          <div className="signup-image">
            {/* <figure>
                <img src="" alt="" />
              </figure> */}
            <NavLink to="/Login" className="signup-image-link">
              Click here if already registered
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
