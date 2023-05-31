import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';
import { images } from '../../constants';

const workTimeline = [
  { year: '2021 - Present', company: 'Web and Design Society, IIT Bhubaneswar', position: 'Web developer' },
  { year: '2021 - 2022', company: 'Alma Fiesta, IIT Bhubaneswar', position: 'Web developer' },
  { year: '2023 - Present', company: 'Medium', position: 'Technical Content Writer' },
  { year: '2023 - Present', company: 'Quadratyx', position: 'Backend Developer Intern' },
  { year: '2023 - Present', company: 'IIT Bhubaneswar', position: 'Research Intern' },
];

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
          <p className="p-text">DSA</p>
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
    {/*
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
*/}
    <div className="app__skills-container font">
      <div className="timeline">
        <h1>Work Timeline</h1>
        <div className="timeline-container">
          {workTimeline.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h2>{item.position}</h2>
                <p>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
