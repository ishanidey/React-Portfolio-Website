import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';
import { images } from '../../constants';

const Skills = () => (
  <>
    <h2 className="head-text font">Skills & Experiences</h2>

    <div className="app__skills-container font">
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.react} alt="" />
          </div>
          <p className="p-text">React</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.vscode} alt="" />
          </div>
          <p className="p-text">VS Code</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.node} alt="" />
          </div>
          <p className="p-text">NodeJs</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.cpp} alt="" />
          </div>
          <p className="p-text">C++</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.javascript} alt="" />

          </div>
          <p className="p-text">JavaScript</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.git} alt="" />
          </div>
          <p className="p-text">git</p>
        </motion.div>
      </motion.div>
      <div className="app__skills-exp">
        <motion.div
          className="app__skills-exp-item"
        >
          <div className="app__skills-exp-year">
            <p className="bold-text">2020-2022</p>
          </div>
          <motion.div className="app__skills-exp-works">
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
              >
                <h4 className="bold-text">Associate and Core Team Member of the Web Team</h4>
                <p className="p-text">Alma Fiesta</p>
              </motion.div>
            </>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <div className="app__skills-container font">
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.mongodb} alt="" />

          </div>
          <p className="p-text">mongoDB</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.htmlcss} alt="" />
          </div>
          <p className="p-text">HTML and CSS</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.dsa} alt="" />

          </div>
          <p className="p-text">Data Structures and Algorithms</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.python} alt="" />

          </div>
          <p className="p-text">Python</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.c} alt="" />

          </div>
          <p className="p-text">C</p>
        </motion.div>
      </motion.div>
      <div className="app__skills-exp">
        <motion.div
          className="app__skills-exp-item"
        >
          <div className="app__skills-exp-year">
            <p className="bold-text">2020-Present</p>
          </div>
          <motion.div className="app__skills-exp-works">
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
              >
                <h4 className="bold-text">Developer and Member</h4>
                <p className="p-text">Web and Design Society of IIT Bhubaneswar</p>
              </motion.div>
            </>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <div className="app__skills-container font">
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.sass} alt="" />
          </div>
          <p className="p-text">SASS</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.ejs} alt="" />
          </div>
          <p className="p-text">EJS</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.heroku} alt="" />
          </div>
          <p className="p-text">Heroku</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.mysql} alt="" />
          </div>
          <p className="p-text">MySQL</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.graphql} alt="" />

          </div>
          <p className="p-text">GraphQL</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.nextjs} alt="" />
          </div>
          <p className="p-text">NEXT.JS</p>
        </motion.div>
      </motion.div>
    </div>
    <div className="app__skills-container font">
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.express} alt="" />
          </div>
          <p className="p-text">express</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"

          >
            <img src={images.arduino} alt="" />
          </div>
          <p className="p-text">arduino</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.matlab} alt="" />
          </div>
          <p className="p-text">matlab</p>
        </motion.div>
      </motion.div>
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
          >
            <img src={images.mysql} alt="" />
          </div>
          <p className="p-text">MySQL</p>
        </motion.div>
      </motion.div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
