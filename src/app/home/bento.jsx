import Image from 'next/image';
import Clock from '@/components/ui/Clock'; // Clock 컴포넌트 경로
import CityText from '@/app/home/CityText'; // CityText 컴포넌트 경로
import TextMotion from './textMotion';

export default function Bento() {
  return (
    <section className="pt-20 lg:pt-32 block px-4 lg:px-8 opacity-100">
      <TextMotion />
      <div className="max-w-[720px] w-full h-[140vh] relative flex-col items-center justify-center bg-black text-white py-20 mx-auto">
        {/* 스크롤 애니메이션 텍스트 */}
        <CityText />
      </div>
    </section>
  );
}
