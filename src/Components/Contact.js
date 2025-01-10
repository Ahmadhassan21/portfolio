import React from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "49dab757-b976-419b-be90-314271d92864");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <>
      <div className="Contact-heading">
        <h1>Get in Touch</h1>
        <p>Contact Me</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="leftsideheading">
              <h4 className="mb-4">Talk to me</h4>
              <div className="Contactleftsidecards">
                <div className="contactcardcontent">
                  <div className="socialicons">
                    <i className="bx bx-envelope"></i>
                  </div>
                  <span>Email</span>
                  <p>meahmed@gmail.com</p>
                  <p>Write me <i className="fa-solid fa-arrow-right mx-1" id="hovericon"></i></p>
                </div>

                <div className="contactcardcontent">
                  <div className="socialicons">
                    <i className="bx bxl-whatsapp"></i>
                  </div>
                  <span>What's app</span>
                  <p>+92 329 9606701</p>
                  <p>Write me <i className="fa-solid fa-arrow-right mx-1" id="hovericon"></i></p>
                </div>

                <div className="contactcardcontent">
                  <div className="socialicons">
                    <i className="bx bxl-instagram"></i>
                  </div>
                  <span>Instagram</span>
                  <p>iahmd._</p>
                  <p>Write me <i className="fa-solid fa-arrow-right mx-1" id="hovericon"></i></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="righsideheading mb-4">
              <h4>Write me your Project</h4>
            </div>
            <div className="contactrightside">
              <form onSubmit={onSubmit}>
                <div className="input-box">
                  <label>Name</label>
                  <input type="text" className="field" placeholder="Enter Your Name" name="name" required />
                </div>
                <div className="input-box">
                  <label className="mt-4">Email-Address</label>
                  <input type="email" className="field" placeholder="Insert your email" name="email" required />
                </div>
                <div className="input-box">
                  <label className="mt-4">Your Message</label>
                  <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <button className="mt-4" type="submit">
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
