import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", //so that cookies will reach backend
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      // means user is not logged in
      console.log(err);
      navigate("/login");
    }
  };

  // the moment we first time open this page, useEffect is called
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={userData.name === "Himanshu Agarkar" ? "../about-profile.jpeg" : "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"} alt="" width="130px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rank <span> 1/10 </span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      role="tab"
                      aria-selected="true"
                      aria-controls="panel-1"
                      id="tab-1"
                      tabIndex="0"
                      href="http://google.com"
                    >
                      About
                    </a>
                    <a
                      className="nav-link active"
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-2"
                      id="tab-2"
                      tabIndex="-1"
                      href="http://google.com"
                      rel="noopener noreferrer"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                name="btnAddMore"
                value="Edit Profile"
                className="profile-edit-btn"
              />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
                <br />
              </div>
            </div>

            {/* right side data toggle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="panel-1"
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby="tab-1"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">34253452345</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">{userData.name}</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>E Mail ID</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">{userData.email}</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Work</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">{userData.work}</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">{userData.name}</label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-2"
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby="tab-2"
                  hidden
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
