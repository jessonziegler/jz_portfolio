import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/jesson-ziegler-5a0b26193">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/jessonziegler?tab=repositories">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/jesson_patrick/?hl=en">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
