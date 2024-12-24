import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import Hero from './hero';
import Bento from './bento';
import SeoulPage from './SeoulPage';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSwiper />
      <Bento />
      <SeoulPage />
      <News />
    </>
  );
};

export default Home;
