import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => (
  <>
    <h2 className="head-text font">Contact me</h2>

    <div className="app__footer-cards font">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:20ec01038@iitbbs.ac.in" className="p-text">20ec01038@iitbbs.ac.in</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:9253338824" className="p-text">9253338824</a>
      </div>
      <div className="app__footer-card">
        <img src={images.linkedin} alt="linkedin" />
        <a href="https://www.linkedin.com/in/ishani-dey-11b9b7213/" className="p-text">View My LinkedIn Profile</a>
      </div>
      <div className="app__footer-card">
        <img src={images.github} alt="linkedin" />
        <a href="https://github.com/ishanidey" className="p-text">My GitHub Profile</a>
      </div>
    </div>
    <div className="app__about app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__about-img"
      >
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-people-hobbies_52683-70930.jpg?w=2000" alt="profile_bg" />
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__about-info"
      >
        <div className="app__about-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="text" data-text="Bit more about me...">Bit more about me...</p>
              <p>if you dont mind🤭</p>
              <p>I am passionate about web development and have built several projects and also deployed a few of them. I have
                used technologies such as: Node.js, Express, EJS, MongoDB, React.js, Next.js, GraphQL, TypeScript.
              </p>
              <p> I was born in Dhekiajuli, Assam. Then i lived in Gujarat, Punjab, Jammu and Kashmir, Haryana, Rajasthan, Orissa and presently in Maharashtra - p.s. only for summer holidays.</p>
              <p>I am very fond of travelling. I love photography as well. </p>
              <p>And, my mother toungue is Bengali. I know Bengali, English and Hindi.😅</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
);
