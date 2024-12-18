import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const ScrollSlide = () => {
  const containerRef = useRef(null); // 슬라이드 컨테이너
  const slideRefs = useRef([]); // 슬라이드 박스들

  // 이미지 배열 (각 이미지를 배열로 관리)
  const images = [
    'publicimagespatternmainItaly.jpg',
    'publicimagespatternmainSingapore.jpg',
    'publicimagespatternmainSwitzerland.jpg',
    'publicimagespatternmainIceland.jpg',
    'publicimagespatternmainIceland.jpg',
  ];

  useEffect(() => {
    // 슬라이드 애니메이션 설정
    gsap.to(slideRefs.current, {
      xPercent: -100 * (slideRefs.current.length - 1), // 슬라이드가 넘어가는 비율
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top', // 시작 위치
        end: `+=${containerRef.current.scrollHeight}`, // 끝 위치
        scrub: true, // 스크롤에 따라 애니메이션이 매끄럽게 따라가도록 설정
        pin: true, // 스크롤하면서 요소를 고정
        markers: false,
      },
    });

    // 슬라이드의 양옆을 어둡게 처리하는 애니메이션
    slideRefs.current.forEach((slide, index) => {
      gsap.to(slide, {
        scrollTrigger: {
          trigger: slide,
          start: 'top center', // 슬라이드가 화면 중앙에 올 때
          end: 'bottom center',
          scrub: true,
        },
        filter: index === 2 ? 'none' : 'brightness(50%)', // 가운데 슬라이드만 밝게
      });
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center" ref={containerRef}>
      <div
        className="flex space-x-14" // 슬라이드 사이에 간격을 두기 위해 space-x-8을 사용
        style={{ width: `${100 * images.length}%` }} // 이미지 개수에 맞게 슬라이드 너비 설정
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[60vw] h-[50vh] flex justify-center items-center"
            style={{
              borderRadius: '20px', // 모서리 둥글게 설정
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)', // 슬라이드에 어두운 음영
              transition: 'filter 0.3s ease-in-out', // 슬라이드 밝기 변환에 애니메이션 추가
            }}
            ref={(el) => (slideRefs.current[index] = el)}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl" // 이미지가 슬라이드를 꽉 채우도록 설정
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlide;
