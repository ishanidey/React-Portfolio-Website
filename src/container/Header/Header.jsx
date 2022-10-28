import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__header-info"
    >
      <h1 className="heading">ishani</h1>
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p>Hi there, 👋 my name is</p>
            <p className="text">Ishani Dey</p>
            <p>I am a student who has been working with web technologies </p>
            <p>building both frontend and backend parts, a C++ prorammer </p>
            <p>currently a fifth sem student at IIT Bhubaneswar </p>
            <p>and someone who is always in hunt of learning more and more</p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 1 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
