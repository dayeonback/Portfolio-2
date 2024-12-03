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
    <div className="pt-[85px] h-svh text-center">
      {' '}
      {/* 헤더 높이만큼 margin-top 추가 */}
      <h1 className="flex justify-center text-balance text-8xl tracking-wide	opacity-0 animate-fade-in font-extrabold text-#fff sm:text-5xl">
        Bliss.
      </h1>
      <p>
        <span>위도경도 표시</span>
        <span>SEOUL</span>
      </p>
      <p className="flex px-6 text-lg tracking-tight	justify-between	">
        <span>TO THE WORLD</span>
        <span>
          ©<span>{format(new Date(), 'yyyy')}</span>
        </span>
        <span>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
        </span>
      </p>
      <div className="mt-10 flex items-center justify- gap-x-6">
        <a href="#" className="bg-white hover:bg-#7DF9FF px-3.5 py-2.5 text-sm font-semibold text-#000 shadow-sm  ">
          Get started
        </a>
      </div>
    </div>
  );
}
