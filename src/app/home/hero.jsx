import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Button, useBreakpointValue } from '@chakra-ui/react';

export default function Hero() {
  const [time, setTime] = useState(new Date());

  // 매 초마다 시간 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Chakra UI의 `useBreakpointValue` 훅을 사용하여 반응형 버튼 레이블 관리
  const buttonLabel = useBreakpointValue({ base: 'TO THE WORLD', md: 'Explore the World' });

  return (
    <>
      {/* 비디오 배경 */}
      <video
        src="/videos/header-video1-pc.5d9f90a5.mp4"
        className="absolute top-0 left-0 w-full h-[100vh] sm:h-[120vh] object-cover z-0"
        autoPlay
        muted
        loop
      ></video>

      {/* 컨텐츠 */}
      <div className="pt-32 h-screen relative text-center">
        {/* 메인 헤더 */}
        <h1 className="flex justify-center text-balance text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wide animate-fade-up font-extrabold text-white mt-0 z-10">
          Bliss.
        </h1>

        {/* 서브 헤더 */}
        <p className="mb-32 sm:mb-40 md:mb-48 lg:mb-[43rem] text-base sm:text-lg md:text-xl tracking-tight text-center z-10 animate-fade-up">
          <span>(47° 45’ 00” N 126° 58’ 41” E)</span>
          <span className="ml-5 sm:ml-8 md:ml-11">SEOUL</span>
        </p>

        {/* 하단 텍스트 */}
        <p className="flex px-6 text-sm sm:text-base md:text-lg tracking-tight justify-between absolute bottom-5 left-0 w-full z-10 animate-fade-up bg-opacity-50 py-4">
          <span>WORLDWIDE</span>
          <span>
            ©<span>{format(new Date(), 'yyyy')}</span>
          </span>
          <span>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
          </span>
        </p>

        {/* 왼쪽 고정 버튼 */}
        <div className="fixed -left-10 sm:-left-10 top-1/2 transform -rotate-90 -translate-y-1/2 gap-x-4 sm:gap-x-6 z-10">
          <a
            href="#"
            className="bg-white hover:bg-neonBlue px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-sm transition duration-300 ease-in-out"
          >
            TO THE WORLD
          </a>
        </div>

        {/* 상단 작은 텍스트 */}
        <div className="absolute left-0 right-0 top-20 text-xs sm:text-sm text-slate-600 animate-fade-in">
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
