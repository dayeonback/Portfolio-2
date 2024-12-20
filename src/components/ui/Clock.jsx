import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Clock = ({ timezone }) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    let accumulatedSeconds = 0; // 누적 초를 저장하는 변수

    const updateClock = () => {
      // 지정된 시간대의 현재 시간을 가져오기 (Intl.DateTimeFormat 사용)
      const now = new Date();
      const timeInTimeZone = new Date(
        now.toLocaleString('en-US', { timeZone: timezone }) // 타임존을 고려한 시간 가져오기
      );

      const hours24 = timeInTimeZone.getHours(); // 24시간제로 가져오기
      const hours = hours24 % 12; // 12시간제로 변환
      const minutes = timeInTimeZone.getMinutes();
      const seconds = timeInTimeZone.getSeconds();

      // 누적된 초를 기준으로 각도 계산
      accumulatedSeconds += 1;
      const hourDeg = (360 / 12) * hours + (30 / 60) * minutes; // 시각 각도 계산
      const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
      const secondDeg = accumulatedSeconds * 6; // 초침은 6도씩 증가

      // GSAP 애니메이션
      gsap.to(hourRef.current, { rotate: hourDeg, duration: 1, ease: 'power2.out', transformOrigin: '50% 0' });
      gsap.to(minuteRef.current, { rotate: minuteDeg, duration: 1, ease: 'power2.out', transformOrigin: '50% 0' });

      // 초침은 누적된 초에 따라 회전
      gsap.to(secondRef.current, {
        rotation: secondDeg,
        duration: 0.5,
        ease: 'power2.out',
        transformOrigin: '50% 0',
      });
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // 초기 실행

    return () => clearInterval(interval); // 클리어 인터벌
  }, [timezone]);

  return (
    <div className="relative w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] border-2 border-white rounded-full flex items-center justify-center bg-black">
      {/* 시 바늘 */}
      <div
        ref={hourRef}
        className="absolute w-[2.3px] h-[35px] sm:h-[38px] lg:h-[50px] bg-white top-1/2 left-1/2 -ml-0.4"
      ></div>

      {/* 분 바늘 */}
      <div
        ref={minuteRef}
        className="absolute w-[1px] h-[40px] sm:h-[50px] lg:h-[60px] bg-white top-1/2 left-1/2"
      ></div>

      {/* 초 바늘 */}
      <div
        ref={secondRef}
        className="absolute w-[1px] h-[45px] sm:h-[55px] lg:h-[65px] bg-neonBlue top-1/2 left-1/2"
      ></div>
    </div>
  );
};

export default Clock;
