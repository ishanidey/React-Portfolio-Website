import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';
import { images } from '../../constants';

const organizations = [
  {
    name: 'IIT Bhubaneswar',
    image: images.iitbbs,
    joinYear: 2020,
    role: 'Full Time BTech ECE student',
  },
  {
    name: 'Web and Design Society IIT Bhubaneswar',
    image: images.webd,
    joinYear: 2021,
    role: 'Web Developer and Member',
  },
  {
    name: 'Alma Fiesta IIT Bhubaneswar',
    image: images.alma,
    joinYear: 2021,
    role: 'Web Developer and Member',
  },
  {
    name: 'Quadratyx',
    image: images.quadratyx,
    joinYear: 2023,
    role: 'Backend Development Intern',
  },
  {
    name: 'IIT Bhubaneswar',
    image: images.iitbbs,
    joinYear: 2023,
    role: 'Research Intern',
  },
  {
    name: 'Medium',
    image: images.medium,
    joinYear: 2023,
    role: 'Technical Content Writer',
  },
  // Add more organizations as needed
];

const skillsList = [
  { image: images.react, name: 'React' },
  { image: images.vscode, name: 'VS Code' },
  { image: images.node, name: 'Node.js' },
  { image: images.cpp, name: 'C++' },
  { image: images.javascript, name: 'JavaScript' },
  { image: images.git, name: 'Git' },
  { image: images.mongodb, name: 'MongoDB' },
  { image: images.htmlcss, name: 'HTML and CSS' },
  { image: images.dsa, name: 'DSA' },
  { image: images.python, name: 'Python' },
  { image: images.c, name: 'C' },
  { image: images.sass, name: 'SASS' },
  { image: images.ejs, name: 'EJS' },
  { image: images.heroku, name: 'Heroku' },
  { image: images.mysql, name: 'MySQL' },
  { image: images.graphql, name: 'GraphQL' },
  { image: images.nextjs, name: 'NEXT.js' },
  { image: images.express, name: 'Express' },
  { image: images.arduino, name: 'Arduino' },
  { image: images.matlab, name: 'MATLAB' },
  { image: images.ts, name: 'TypeScript' },
];

const certificateList = [
  { image: images.c1, name: 'Soil Moisture Sensing and Transmission' },
  { image: images.c2, name: 'Crack leaked password database' },
  { image: images.c3, name: 'Jumpstart organised by Publicis Sapient' },
  { image: images.c4, name: 'JavaScript Algorithms and Data Structures' },
  { image: images.geekgoddess, name: 'SemiFinalist @ TechGig Geek Goddess 2022' },
  { image: images.docker, name: 'Udemy Docker Course' },
];

const Skills = () => {
  const chunkSize = 3;
  const skillChunks = [];

  for (let i = 0; i < skillsList.length; i += chunkSize) {
    const chunk = skillsList.slice(i, i + chunkSize);
    skillChunks.push(chunk);
  }

  return (
    <>
      <h2 className="head-text font">Skills & Experiences</h2>

      <div className="app__skills-container font">
        {skillChunks.map((chunk, index) => (
          <div className="app__skills-row" key={index}>
            {chunk.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-list"
              >
                <motion.div className="app__skills-item app__flex">
                  <div className="app__flex">
                    <img src={skill.image} alt="" />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="app__skills-container font">
        <div className="timeline-container app__certificate-columns">
          {certificateList.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <img className="app__skills-image" src={item.image} alt="" />
              <div className="timeline-content">
                <h6>{item.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="app__skills-container font">
        <div className="organizations-container">
          {organizations.map((organization, index) => (
            <div className="organization" key={index}>
              <div className="organization-details">
                <p className="organization-role">{organization.role}</p>
                <img src={organization.image} alt={organization.name} />
                <h2 className="organization-name">{organization.name}</h2>
                <p className="organization-year">Joined in {organization.joinYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
