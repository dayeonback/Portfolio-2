import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <video
        src="/videos/header-video1-pc.5d9f90a5.mp4"
        className="absolute top-0 left-0 w-full h-[140vh] object-cover z-0"
        autoPlay
        muted
        loop
      ></video>
      <div className="pt-32 h-screen relative text-center">
        <h1 className="flex justify-center text-balance text-8xl tracking-wide animate-fade-up font-extrabold text-white sm:text-5xl max-w-4xl mt-0 z-10">
          Bliss.
        </h1>

        <p className="mb-[43rem] text-lg tracking-tight text-center z-10 animate-fade-in">
          <span>(47° 45’ 00” N 126° 58’ 41” E)</span>
          <span className="ml-11">SEOUL</span>
        </p>
        <p className="flex px-6 text-lg tracking-tight justify-between bottom-12 z-10 relative animate-fade-up">
          <span>WORLDWIDE</span>
          <span>
            ©<span>{format(new Date(), 'yyyy')}</span>
          </span>
          <span>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
          </span>
        </p>

        <div className="fixed -left-11 top-1/2 transform -rotate-90 -translate-y-1/2 gap-x-6 z-10">
          <a
            href="#"
            className="bg-white hover:bg-neonBlue px-5 py-5 text-sm font-semibold text-black shadow-sm transition duration-300 ease-in-out"
          >
            TO THE WORLD
          </a>
        </div>
        <div className="absolute left-0 right-0 top-20 text-xs text-slate-600 animate-fade-in">
          <p className="flex px-5 justify-between">
            <span>A New Horizon</span>
            <span>World Waiting</span>
            <span>Adventure Calling</span>
          </p>
          <p className="flex px-5 justify-between">
            <span>Journeys Ahead</span>
            <span>Vistas Unfolding</span>
            <span>Exploring Boundaries</span>
          </p>
        </div>
      </div>
    </>
  );
}
