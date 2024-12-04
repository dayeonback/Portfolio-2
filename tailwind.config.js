/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      maxWidth: {
        DEFAULT: '1340px',
      },
      px: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neonBlue: '#08fc96', // 사용자 정의 색상 추가
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards', // 페이드 인 애니메이션
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 }, // 시작 상태: 투명
          '100%': { opacity: 1 }, // 끝 상태: 불투명
        },
      },
      fontFamily: {
        custom: ['"Inter"', 'sans-serif'], // 여기서 Inter 대신 원하는 폰트를 설정하세요
      },
    },
  },
  plugins: [],
};
