import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const handleExperienceClick = () => {
  alert('Experience the thrill of fixing bugs and solving puzzles!'); // eslint-disable-line no-alert
};

const handleCuriosityClick = () => {
  alert('Curiosity led me to discover the fascinating world of web development!'); // eslint-disable-line no-alert
};

const About = () => (
  <>
    <h2 className="head-text">About Me</h2>
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__about-info"
    >

      <div className="font" id="about">
        <div className="heading bgimg">
          <p style={{ marginBottom: '1.5em' }}>My name is Ishani. A student of IIT Bhubaneswar, currently pursuing BTECH in Electronics and Communication department.
          </p>
          <p style={{ marginBottom: '1.5em' }}>
            Fixing bugs and solving puzzles thrills me the most{' '}
            <span onClick={handleExperienceClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
              😄(click me!)
            </span>
            .
          </p>
          <p style={{ marginBottom: '1.5em' }}>
            It is through this passion that I stumbled upon web development and became fascinated with the process of creating magnificent websites {' '}
            <span onClick={handleCuriosityClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
              😄(click me!)
            </span>
            , and this site is a byproduct of that.
          </p>
          <p style={{ marginBottom: '1.5em' }}>My curiosity to know how such magnificent sites are built led me to discover web development😄 The site you are currently visiting is a result of my exploration in this field..</p>
          <p style={{ marginBottom: '1.5em' }}>This site is a single page application built with React.</p>
          <a href="https://github.com/ishanidey/React-Portfolio-Website">
            <button type="button" className="button">Go to the repository</button>
          </a>
          <p style={{ marginBottom: '1.5em', marginTop: '1.5em' }}>A C++ programmer and a wannabe photographer. My target is always to write neat and efficient code.</p>
          <p style={{ marginBottom: '1.5em' }}>Looking forward to jam with amazing individuals and groups to learn lot more 🙏 </p>
        </div>
      </div>
    </motion.div>
    <div className="app__about app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__about-info"
      >
        <h1 className="heading">ishani</h1>
        <div className="app__about-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p>Hi there, 👋 there is a lot more...</p>
              <p> Explore further to discover more about my projects, skills, and experiences. </p>
              <p>Ready to dive deeper into my world? </p>
              <p className="text">Go down</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__about-img"
      >
        <img src={images.profile2} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.animation}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  </>
);

export default AppWrap(About, 'about');
