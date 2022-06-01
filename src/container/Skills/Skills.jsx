import React from 'react';
import { motion } from 'framer-motion';
import { green } from '@material-ui/core/colors';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-item app__flex"
        >
          <div
            className="app__flex"
            style={{ backgroundColor: green }}
          >
            <img src="" alt="" />
          </div>
          <p className="p-text">skill name</p>
        </motion.div>
        ))
      </motion.div>
      <div className="app__skills-exp">
        <motion.div
          className="app__skills-exp-item"
        >
          <div className="app__skills-exp-year">
            <p className="bold-text">experience year</p>
          </div>
          <motion.div className="app__skills-exp-works">
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
              >
                <h4 className="bold-text">work name</h4>
                <p className="p-text">work company</p>
              </motion.div>
            </>
            ))
          </motion.div>
        </motion.div>
        ))
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
