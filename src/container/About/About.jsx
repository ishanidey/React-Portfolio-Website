import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

// import motion from 'framer-motion';
import './About.scss';

const About = () => (
  <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1, type: 'tween' }}
    >

      <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img src={images.about01} className="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750" />
        </div>

        <div className="w3-col m6 w3-padding-large font">
          <h1 className="w3-center">About Me</h1><br />
          <h5 className="w3-center">Likes to code 24x7!!!</h5>
          <p className="w3-large">A sophomore at Indian Instiute of Technology, Bhubaneswar. Loves to explore new technologies of the web development world and creates projects based on one of the most used stacks of present era. A MERN statck developer,competitive programmer, interested in problem solving in competitions as well as real life.<span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
          <p className="w3-large w3-text-grey w3-hide-medium">A really creative mind. Lot more to explore...</p>
        </div>
      </div>
    </motion.div>
  </>
);

export default AppWrap(About, 'about');
