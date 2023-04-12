/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], // 프로덕션으로 빌드할 때 purge에 설정된 파일에서 사용되지 않는 클래스는 모두 제거
  safelist: [], // safelist에 들어가 잇으면 purge단계에서 제거되지 않는다
};
