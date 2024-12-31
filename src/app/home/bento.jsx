import CityText from '@/app/home/CityText';
import TextMotion from './textMotion';

export default function Bento() {
  return (
    <section className="pt-20 sm:pt-20 md:pt-24 lg:pt-32 block px-4 sm:px-6 md:px-8 lg:px-12 opacity-100">
      <div className="w-full h-[110vh] sm:h-[130vh] md:h-[170vh] lg:h-[170vh] xl:h-[190vh] 2xl:h-[190vh] relative flex-col items-center justify-center bg-black text-white py-16 sm:py-18 md:py-20 lg:py-24 xl:py-28 2xl:py-32 mx-auto">
        {/* 스크롤 애니메이션 텍스트 */}
        <CityText />
      </div>
      <TextMotion />
    </section>
  );
}
