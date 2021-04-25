import React from 'react';
import Common from './Common';
import web from '../src/images/office.png'

const Home = () => {
  return (
    <>
        <Common name="Grow your business with" visit="/service" imgsrc={web} btname="Get Started" />
    </>
  );
};

export default Home;