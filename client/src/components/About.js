import React from "react";

function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="./about-profile.jpeg" alt="" width="130px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Himanshu Agarkar</h5>
                <h6>Data Engineer</h6>
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
                <a href="http://google.com" target="_blank">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank">
                  YouTube
                </a>
                <br />
                <a href="http://google.com" target="_blank">
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
                      <label htmlFor="User ID">Himanshu Agarkar</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">Himanshu Agarkar</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">Himanshu Agarkar</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="User ID">Himanshu Agarkar</label>
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
