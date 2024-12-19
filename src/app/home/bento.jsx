import Image from 'next/image';
import Clock from '@/components/ui/Clock'; // Clock 컴포넌트 경로
import CityText from '@/components/animations/CityText'; // CityText 컴포넌트 경로
import TextMotion from './textMotion';

export default function Bento() {
  return (
    <section className="pt-20 lg:pt-32 block px-4 lg:px-8 opacity-100">
      {/* 기존 내용 */}
      <TextMotion />
      {/* 추가된 Clock과 CityText 섹션 */}
      <div className="w-full flex flex-col items-center justify-center relative bg-black text-white py-20">
        {/* Clock 컴포넌트 */}
        <div>
          <Clock />
        </div>
        {/* 스크롤 애니메이션 텍스트 */}
        <div
          className="overflow-hidden 
        w-full"
        >
          <CityText />
        </div>
      </div>
    </section>
  );
}
