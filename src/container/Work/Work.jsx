import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = () => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['DSA', 'Frontend', 'Backend', 'React JS'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter()}
            className="app__work-filter-item app__flex p-text"
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-item app__flex">
          <div
            className="app__work-img app__flex"
          >
            <img src="" alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href="ishanidey@github.com" target="_blank" rel="noreferrer">

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="https://github.com/new" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">write title</h4>
            <p className="p-text" style={{ marginTop: 10 }}> write description</p>

            <div className="app__work-tag app__flex">
              <p className="p-text">write work tag 0</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-item app__flex">
          <div
            className="app__work-img app__flex"
          >
            <img src="" alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href="ishanidey@github.com" target="_blank" rel="noreferrer">

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="https://github.com/new" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">write title</h4>
            <p className="p-text" style={{ marginTop: 10 }}> write description</p>

            <div className="app__work-tag app__flex">
              <p className="p-text">write work tag 0</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
