import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-bojack.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { BsAlignCenter, BsSlack } from "react-icons/bs";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginLeft: 20 }}>
              {about.title}
            </h2>
            <p className="p-text3" style={{ marginTop: 40 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <p2 className="lb">
        My name is Jesson and I'm a Full Stack Web Developer as well as an
        experienced Audio Engineer. My focus is on Front-end Web Development
        while staying up to date with the newest technologies to build creative
        apps in the most efficient way possible. A graduate of Lighthouse Labs
        Full Stack Web Development program with a diploma in Manufacturing
        Engineering from Fanshawe College. As an Audio Engineer I work from my
        home studio and while I have some outboard gear, I mostly mix in the box
        with Logic Pro. My full music portfolio is available upon request. I'm
        also a Musician and when I'm not building apps or mixing I spend my time
        playing guitar and watching stand-up comedy.
      </p2>

      <AwesomeButton
        className="button"
        type="primary"
        size="medium"
        href="https://resume.creddle.io/resume/6yu6z5ohg1m"
      >
        Resume
      </AwesomeButton>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
