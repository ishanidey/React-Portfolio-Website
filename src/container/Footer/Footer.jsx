import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => (
  <>
    <h2 className="head-text">Contact me</h2>

    <div className="app__footer-cards">
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
        <a href="https://github.com/ishanidey" className="p-text">https://github.com/ishanidey</a>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
);
