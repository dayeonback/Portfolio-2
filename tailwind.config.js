/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 다크 모드 설정
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
      },
      // 사용자 정의 애니메이션 추가
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards', // 페이드 인 애니메이션
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 }, // 시작 상태: 투명
          '100%': { opacity: 1 }, // 끝 상태: 불투명
        },
      },
    },
  },
  plugins: [],
};
