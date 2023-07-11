import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const projects = [
  {
    image: images.nextjsproject,
    liveLink: 'https://ishaniarticles-blogs-website.vercel.app/',
    codeLink: 'https://github.com/ishanidey/ishaniArticles',
    title: 'Web development Blogging site',
    description: 'Fullstack application using NEXT.JS AND GraphQL and GraphCMS',
  },
  {
    image: images.blogsitenew,
    liveLink: 'https://ishaniarticles-blogs-website.vercel.app/',
    codeLink: 'https://digital-diary-odishatales.onrender.com/blogs',
    title: 'Blogging Site',
    description: 'Focused in backend development - CRUD application',
  },
  {
    image: images.bg,
    liveLink: 'ishanidey@github.com',
    codeLink: 'https://github.com/ishanidey/the-green-balcony',
    title: 'MERN STACK',
    description: 'A management system for a nursery.',
  },
  {
    image: images.arduino,
    liveLink: 'ishanidey@github.com',
    codeLink: 'https://github.com/ishanidey/arduino_project',
    title: 'Arduino Project',
    description: 'Incorporated with hardware to calculate soil moisture.',
  },
  {
    image: images.cinemania,
    liveLink: '',
    codeLink: 'https://github.com/ishanidey/CineMania',
    title: 'React - Movie Website "CineMania"',
    description: 'Used ReactJS and OMDB api to fetch data about movies',
  },
  {
    image: images.restapi,
    liveLink: '',
    codeLink: 'https://github.com/ishanidey/socialWebsite_backend',
    title: 'Social Media REST api',
    description: 'Used NodeJS, MongoDB',
  },
  {
    image: images.crud,
    liveLink: '',
    codeLink: 'https://github.com/ishanidey/notesStorage',
    title: 'REST api for a platform where users can login and store notes',
    description: 'Used NodeJS and MongoDB',
  },
  {
    image: images.ai,
    liveLink: '',
    codeLink: '',
    title: 'AI Project',
    description: 'Description of the AI project goes here',
  },
];

const Work = () => (
  <>
    <h2 className="head-text font">Things I have <span>Built</span></h2>

    {projects.map((project, index) => (
      <motion.div
        key={index}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={project.image} alt="" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              {project.liveLink && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="app__work-link"
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <AiFillEye className="app__work-icon" />
                  </a>
                </motion.div>
              )}

              {project.codeLink && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="app__work-link"
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="app__work-icon" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="app__work-content app__flex">
            <h4 className="app__work-title">{project.title}</h4>
            <p className="app__work-desc">{project.description}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </>
);

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
