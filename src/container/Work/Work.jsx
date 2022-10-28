import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => (
  <>
    <h2 className="head-text font">Things I have <span>Built</span></h2>

    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.blogsite} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href="https://blog-site-by-ishani.herokuapp.com/blogs" target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/blog_site" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">Blogging Site</h4>
          <p className="p-text" style={{ marginTop: 10 }}>Focused in backend development - CRUD application</p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to see live and code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.bg} alt="" />

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
            <a href="https://github.com/ishanidey/the-green-balcony" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">MERN STACK </h4>
          <p className="p-text" style={{ marginTop: 10 }}> A management system for a nursery.</p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.arduino} alt="" />

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
            <a href="https://github.com/ishanidey/arduino_project" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">Arduino Project</h4>
          <p className="p-text" style={{ marginTop: 10 }}> Incorporated with hardware to calculate soil moisture.</p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.cinemania} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href=" " target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/CineMania" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">React - Movie Website `&quot;CineMania`&quot;` </h4>
          <p className="p-text" style={{ marginTop: 10 }}>Used ReactJS and OMDB api to fetch data about movies </p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.restapi} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href=" " target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/socialWebsite_backend" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">Social Media REST api </h4>
          <p className="p-text" style={{ marginTop: 10 }}>Used NodeJS, MongoDB </p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.crud} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href=" " target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/notesStorage" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">REST api for a platform where users can login and store notes </h4>
          <p className="p-text" style={{ marginTop: 10 }}>Used NodeJS and MongoDB </p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.ai} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href=" " target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/personal_assistant" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text">Personal Assitant using python</h4>
          <p className="p-text" style={{ marginTop: 10 }}> Built a program which uses speech recognition to do tasks.</p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__work-portfolio"
    >
      <div className="app__work-item app__flex">
        <div
          className="app__work-img app__flex"
        >
          <img src={images.texttools} alt="" />

          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
            className="app__work-hover app__flex"
          >
            <a href=" " target="_blank" rel="noreferrer">

              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href="https://github.com/ishanidey/text_conversion" target="_blank" rel="noreferrer">
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
          <h4 className="bold-text"> TEXTtools </h4>
          <p className="p-text" style={{ marginTop: 10 }}>A react application with some functions to play around with the text.</p>

          <div className="app__work-tag app__flex">
            <p className="p-text">Hover to view code</p>
          </div>
        </div>
      </div>
    </motion.div>
  </>
);

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
