import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
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
          <p style={{ marginBottom: '1.5em' }}>My name is Ishani Dey, and I am currently pursuing a Bachelor’s degree in Electronics and Communication
            Engineering from the Indian Institute of Technology (IIT) Bhubaneswar. I am in my fourth year of undergraduate
            studies (2020-2024).
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
          <p>I am proficient in C++ and have also learnt C and Python in my first year. My focus is on developing web
            applications and solving problems using data structures and algorithms.
            Recently, I have started writing content on Medium as a technical writer, where I share my knowledge and insights
            on various topics related to web development and programming.
          </p>
          <p style={{ marginBottom: '1.5em', marginTop: '1.5em' }}>My target is always to write neat and efficient code.</p>
          <p style={{ marginBottom: '1.5em' }}>Looking forward to jam with amazing individuals and groups to learn lot more 🙏 </p>
        </div>
      </div>
    </motion.div>
  </>
);

export default AppWrap(About, 'about');
