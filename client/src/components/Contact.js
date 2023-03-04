import React from "react";

function Contact() {
  return (
    <>
      <div className="contact_info mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img
                  src="./logo192.png"
                  alt="phone"
                /> */}
                <div className="contact_info_title">Phone:&nbsp;</div>
                <div className="contact-info-text">+0-3409-0943</div>
              </div>
              {/* email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img src="" alt="phone" /> */}
                <div className="contact_info_title">Email:&nbsp;</div>
                <div className="contact-info-text">himanshua@gmail.com</div>
              </div>
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                {/* <img src="" alt="phone" /> */}
                <div className="contact_info_title">Address:&nbsp;</div>
                <div className="contact-info-text">Nagpur</div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us form */}
        <div className="contact_form">
          <div className="container">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title h2">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_name input_field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className="text_field contact_form_message" name="" placeholder="Message" cols="109" rows="10"></textarea>
                  </div>
                  <div className="contact-form-button mt-4">
                    <button type="submit" className="button contact_submit_button">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
