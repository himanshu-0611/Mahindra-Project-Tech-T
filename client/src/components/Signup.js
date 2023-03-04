import React from 'react'
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign Up</h2>
            </div>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' autoComplete='off' placeholder='Enter Name'/> 
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input type="email" name="email" id='email' autoComplete='off' placeholder='Enter Email'/> 
              </div>
              <div className="form-group">
                <label htmlFor="phone">Contact Number</label>
                <input type="number" name="phone" id='phone' autoComplete='off' placeholder='Enter Contact Number'/> 
              </div>
              <div className="form-group">
                <label htmlFor="work">Profession</label>
                <input type="text" name="work" id='work' autoComplete='off' placeholder='Enter Profession'/> 
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id='password' autoComplete='off' placeholder='Enter Password'/> 
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="text" name="cpassword" id='cpassword' autoComplete='off' placeholder='Enter Password Again'/> 
              </div>
              <div className="form-group form-buttom">
                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
              </div>
            </form>
              </div>
            <div className="signup-image">
              {/* <figure>
                <img src="" alt="" />
              </figure> */}
              <NavLink to="/Login" className="signup-image-link">Click here if already registered</NavLink>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Signup