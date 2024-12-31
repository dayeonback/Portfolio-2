import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import Hero from './hero';
import Bento from './bento';
import SeoulPage from './SeoulPage';
import Information from './Information';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSwiper />
      <Bento />
      <SeoulPage />
      <Information />
      <News />
    </>
  );
};

export default Home;
