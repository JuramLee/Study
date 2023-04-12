//타입정의
//이미지, 아이콘, 환경 변수 등을 declare를 사용하면 좋다. 또 자동완성 및 태그로서 활용 가능

// mp3나 기타 확장자의 경우 declare module이 필수
// declare module '*.mp3' 이렇게 안하면 typescript가 mp3파일을 가지고 오지 못한다.

// declare module 모듈 선언
declare module "@env" {
  export const BACK_URL: process.env.REACT_APP_BACK_URL;
}
