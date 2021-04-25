import React from 'react';
import Common from './Common';
import web from '../src/images/office.png';

const About = () => {
  return (
    <>
        <Common name="Welcome to About page" visit="/contact" imgsrc={web} btname="Contact Us" />
    </>
  );
};

export default About;