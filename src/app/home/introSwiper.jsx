'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const main = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 가로 스크롤 섹션 설정
      const boxes = gsap.utils.toArray('.box');
      const totalWidth = boxes.length * 150; // 박스들의 총 가로 너비

      gsap.to(boxes, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainer.current,
          pin: true,
          start: 'top top',
          end: `+=${totalWidth + 100}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* 애니메이션 박스들이 있는 섹션 */}
      <div ref={main} className="relative overflow-hidden">
        <div ref={scrollContainer} className="min-h-screen w-full flex items-center">
          <div className="flex gap-8 pl-[50vw]">
            <div className="box w-48 h-48 flex-shrink-0 rounded-lg flex justify-center items-center text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
              box 1
            </div>
            <div className="box w-48 h-48 flex-shrink-0 rounded-lg flex justify-center items-center text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
              box 2
            </div>
            <div className="box w-48 h-48 flex-shrink-0 rounded-lg flex justify-center items-center text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
              box 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
