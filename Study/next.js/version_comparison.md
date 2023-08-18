## Version 12 vs Version 13

13버전부터 모든 React 컴포넌트는 Server side component이다.

### layout

- **V12**  
  `pages` 폴더 하위의 모든 파일들이 하나의 경로였다. \_app, - \_document로 관리했다.
- **V13**  
  `app`이라는 디렉토리가 만들어졌다. 이를 통해 깔끔한 디렉토리 구조와, layout, React Server Component, streaming 등 여러 기능이 제공된다.  
  👉 13 이전 버전에서의 \_app, \_document 파일의 역할.  
  👉 app 폴더 하위에는 반드시 하나의 layout 파일이 있어야 한다.

### head

app 폴더 하위에 있는 layout 파일을 이용하면 Header 파일 지정 가능. 각 라우팅마다 title을 다르게 할 수 있어 해당 라우팅의 메타 정보 지정 가능

- **V12**  
  12버전에서는 라우팅이 가능했지만 app폴더 밑에 Header파일을 만들어도 header 경로로 라우팅 되지 않는다.
- **V13**  
  13버전부터는 무조건 폴더 밑에 index 파일이 첫번째로 읽히는 파일이다.

### Data fetching

React Suspense 기반으로 구현된 새로운 data fetching 방식

- **V12**  
  12버전에서는 함수를 별도로 export 하면서 SS단으로 돌아가게 하는 로직이었다.
  - getServerSideProps
  - getStaticProps
- **V13**  
  13버전에서는 쉽게 구현가능
  - fetch(URL, {cache: option})  
     option에는
  1. force-cache : 강제로 캐싱하여 정적사이트화. 기본값. 처음은 SS로 작동, 같은 요청이 오면 캐싱 사용. 12버전에서 getStaticProps와 비슷
  2. no-store : 캐싱 없이 무조건 SS로 작동. 'no-cache'도 쓰인다. 12버전에서 getServerSideProps와 비슷
  3. next: {revalidate: 10} : ISR이며, 숫자는 초 단위. 숫자 초마다 캐시를 갱신한다는 의미. SEO에 유리하고 내용이 변경되어도 사이트를 재배포할 필요가 없다.  
     ISR의 경우 모든 정적 페이지를 다시 빌드하는 것이 아니라 특정 페이지만 다시 빌드하는 기능. revalidate 옵션을 지정한 getStaticProps와 비슷.

### Turbopack

Rust 기반의 새로운 번들러.  
기존 webpack은 최대 성능의 한계에 도달했고 vite보다 10배 빠르다.
