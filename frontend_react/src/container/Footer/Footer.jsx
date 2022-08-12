import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">
        Contact <span>Me</span>
      </h2>
      <AwesomeButton
        className="button"
        type="primary"
        size="large"
        href="tel:+1 (647) 467-7582"
      >
        1-(647)-467-7582
      </AwesomeButton>
      <br />
      <AwesomeButton
        className="button"
        type="primary"
        size="large"
        href="mailto:jziegleraudio@gmail.com"
      >
        jziegleraudio@gmail.com
      </AwesomeButton>
      <div className="social">
        <div className="link">
          <a href="https://www.linkedin.com/in/jesson-ziegler-5a0b26193">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/jessonziegler?tab=repositories">
            <BsGithub />
          </a>
        </div>
        <div className="insta">
          <a href="https://www.instagram.com/jesson_patrick/?hl=en">
            <BsInstagram />
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
