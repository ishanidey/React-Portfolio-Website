import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import './About.scss';

const About = () => (
  <>
    <h2 className="head-text">About Me</h2>
    <motion.div
      transition={{ duration: 1, type: 'tween' }}
    >

      <div className="font" id="about">
        <div className="heading">
          <p>My name is Ishani. A student of IIT Bhubaneswar, currently pursuing 4th semester in BTECH of electronics and communication department.
          </p>
          <p>Fixing bugs and solving puzzles thrils me the most😀. </p>
          <p>My curiosity to know how such magnificent sites are built led me to discover web development😄 and this site is a byproduct of that.</p>
          <p>This site is a single page application built with React.</p>
          <p>A C++ programmer and a wannabe photographer. My target is always to write neat and efficient code.</p>
          <p>Looking forward to jam with amazing individuals and groups to learn lot more 🙏 </p>
        </div>
      </div>
    </motion.div>
  </>
);

export default AppWrap(About, 'about');
