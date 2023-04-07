# Movie Trailer toy project

## 📝프로젝트 설명

    본 프로젝트는 Open API(movie)를 활용한 영화 트레일러 싱글 페이지입니다.
<br></br>


### 📁프로젝트 폴더 구조

```
    📂public
    ├─📂Assets
    │
    📂src
    ├─App.js
    │
    ├─index.js
    │
    ├─📂Apis
    │  └─core.js
    |  └─movieApi.js
    │
    ├─📂Components
    │  └─📂Layout
    │     └─📂Header
    │        └─header.js
    │     └─index.js
    │
    ├─📂Hooks
    │  └─📂Queries
    │     └─now-playing.js
    │
    ├─📂Pages
    │  └─📂Main
    │     ├─📂Components
    │     │  ├─📂Card
    │     │  │  ├─card.js
    │     │  │  └─skeleton.js
    │     │  ├─📂Menu
    │     │  │  └─menu.js
    │     │  └─📂Post
    │     │     └─post.js
    │     └─index.js
    │
    ├─📂Routes
    │     └─routing.js
    │
    └─📂Styles
        └─global.js

```

## 📽실제 구현 화면(이미지)
<br></br>

-- 메인페이지 --
![main](https://user-images.githubusercontent.com/113501460/230551548-16b9c562-ae27-42ca-89fc-165895eaca19.PNG)

-- 메인페이지 하단 무한 스크롤 및 영화 카드 --
![List](https://user-images.githubusercontent.com/113501460/230551828-80e5b6a5-bebb-4562-bd3b-38b480a949f0.PNG)
<br></br>

## 🔍구현 기능

1.  **Infinite Scroll**

- '@tanstack/react-query'의 useInfiniteQuery()를 이용한 무한 스크롤링. 'react-intersection-observer'의 useInView()로 observer 구현.
  <br></br>


2.  **Skeleton UI**

- 'mui'의 Skeleton UI를 활용한 로딩중 화면 표시.

    <br></br>



### 🔧 사용 기술 스텍

| 기술 스택      | 종류                                                                                                                                             |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **언어**       | <img  width="60" src="https://user-images.githubusercontent.com/112946860/225957694-7e3b3669-9216-4271-a7c8-555c8976368b.png" /><br />Javascript |
| **프론트엔드** | <img width="60" src="https://user-images.githubusercontent.com/112946860/225957071-10a74540-d7b5-457c-821e-91547e62a429.png" /><br />React       |

<br></br>

| 사용 라이브러리       | 사용한 부분                      |
| :-------------------- | :------------------------------- |
| **styled-components** | 스타일 컴포넌트 구성 시 사용     |
| **react-router-dom**  | URL에 따라 화면을 렌더링 시 사용 |
| **axios**             | api를 통한 비동기 통신 시 사용   |

<br></br>
