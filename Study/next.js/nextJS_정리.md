## Next.JS 사용법

### \_document 폴더

서버에서만 랜더링되고, onclick과 같은 client side event는 동작하지 않는다. CSS도 X
nextJS는 기본적으로 마크업 정의(html, head, body 등)를 건너띄기 때문에 마크업 정의를 사용하기 위해서는 필수적으로 `_document.js` 파일을 사용해서 수정해줘야한다.

### \_app 폴더

globalCSS 사용하거나, layout 잡을때 사용하는 파일

    page.js
    	메인 페이지
    layout.js
    	page.js 파일을 감싸는 페이지
    	page.js 내용을 layout.js 파일 안에서 children으로 받는다.
    	head태그 안에 내용이나, 상단메뉴 등을 넣으면 된다.
    xxx.module.css
    	특정 페이지에만 적용 가능한 css

### api 폴더

    api 폴더는 서버 기능 만드는 곳

---

SSR 기술쪽을 API Route 라고 한다.

### .env 파일

    .env 파일을 설정할 땐 .env는 기본적으로 SSR에서만 사용가능함.	따라서 브라우저에서 사용하고 싶으면(CSR로 사용) 변수명 접두사로 NEXT_PUBLIC을 붙이면 됨.
    NEXT_PUBLIC_이라는 접두사를 적어야하고, 사용할 땐 리액트와 동일하게 precess.env.이름으로 사용하면 됨

    사이트 탭 명과 설명(description)은 metadata로 변경이 가능하고, 이는 SSR 사용법이다.

---

### nextJS에서 CSR으로의 설정과 Route 설정

next.js는 별다른 조치를 취하지 않으면 SSR로 인식한다.  
이때에는 CSR의 hooks나 다른 기능들은 사용하지 못한다.

사용자와 상호작용이 필요한 경우는 CSR이다보니(예. onSubmit) 최상단에 `"use client"`를 적어야 한다.

- CSR일 때만 사용할 수 있는 useRouter();

- UI를 만들 때는 export default 함수명 해줘야한다.

1️⃣ **Router**  
 <code>Redirection</code> 시키기 위해서는 router.push(주소)
이 때 왜 location.href나 a태그로 이동 말고 router.push 등으로 이동을 할까?
location이나 a태그로 이동하면 페이지가 새로고침하면서 랜더링되는데 router를 이용하면 페이지 안에 리소스만 변경되어 SPA의 장점을 그대로 가져갈 수 있어서

```jsx
// next12버전 page/router 방식
import { useRouter } from "next/router";

// next13버전 app/router 방식
import { useRouter } from "next/navigation";

const router = useRouter();
const id = Number(router.query.id);
```

</br>

또한 url에 path를 설정했으면 / (main)일 때는 <code>src/app/page.js</code>가 오고 만약 url에 path가 /create이면 <code>src/app/create/page.js</code>가 온다. (약속된 사항)  
그리고 url과 일치하는 폴더를 찾으면 가장 가까운 layout.js를 거슬러 올라가며 찾아서 거기서 랜더링 된다. 찾은 layout.js가 app에 있는 파일이 아니라 해당 폴더 내에 있다면 해당 layout.js는 아래와 같이 사용되야한다.

```jsx
// 이 예시처럼 props로 받아야하고, props.children으로 사용해야한다.
export default function Layout(props) {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
}
```

</br>

2️⃣ **Dynamic route**  
만약 url 경로가 id 나 기타 세그먼트가 온다? 그러면 다음과 같이 만들어야 함.

```
http://localhost:3000/read/1
```

위의 url로 설명하자면, 폴더는 src/app 아래 경로 이름과 동일한 폴더를 만들고(read폴더가 만들어져서) <code>src/app/read</code>, 세그먼트의 key로 사용할 내용과 동일한 이름의 폴더를 만든다(여기서는 id라고 치면)
<code>src/app/read/[id]</code>라는 폴더가 생성되고, 그 폴더 안에 `page.js` 파일을 만들어야한다. 또한 params 값인 1을 가지고와서 사용하기 위해서는

```jsx
// props.children.여기는 폴더 명으로 사용했던 즉, 세그먼트의 키값으로 접근하면 된다.
export default function Layout(props) {
  return (
    <>
      <div>parameter : {props.params.id}</div>
    </>
  );
}
```

[...키값]처럼 ...을 사용하면 path가 `키값/*` 으로 동작한다.

```
pages/home/[...category].js 파일을 만들면 경로가 아래처럼 모든 경로를 잡아낸다.
pages/home/1
pages/home/news
pages/home/myPage
pages/home/myPage/info/edit
...
```

3️⃣ **Optional route catch-all**  
선택적으로 경로 설정하는 방법이다.  
파일명을 [[...키값]]으로 설정하면 된다.

이 때 동적 라우팅과 선택적 동적 라우팅의 차이는 선택적 동적 라우팅은 파라미터가 없는 path여도 전부 매치한다는 점이다.

```
// 이처럼 여러 경로를 설정할 수 있다.
pages/post/[[...theme]].js 해두면 pages/post/*과 동일하다.
ex) /post, /post/light, /post/dark
```

```
‼️ 주의사항
  - 정의해 놓은 라우트가 다이나믹 라우트보다 우선순위를 가지고, 다이나믹 라우트는 모든 경로를 연결한다.
  - 자동 정적 최적화(ASO)에 의해 정적으로 최적화된 페이지는 경로 매개변수를 제공하지 않은 상태로 hydrated 된다. 즉, 쿼리가 빈 객체가 된다.
  - hydration 이후에는 next.js는 쿼리 객체에 라우트 파라미터를 제공하기 위해 앱에 대한 업데이트를 진행한다.

```

### SSR과 방문기록이 있는 페이지의 리소스는 다시 다운받지 않는 방법

a태그를 Link 태그로 바꾼다.
`import Link from 'next/link'; `

1. 뷰포트에 있는 모든 항목들이 pre-rendering되어 리소스를 미리 다운 받아놓고 클릭하면 바로 보여줌 (prefetch 속성. default가 true)  
   false여도 마우스가 hover되면 prefetch된다. 또한 prefetch는 상용버전(production)에서만 활성화 된다.
2. 또한 한번 방문한 페이지의 리소스는 다시 불러들이지 않는다.

### public 리소스 사용법

    "/파일명.png"

### Cache

- 새로 데이터 받는 방법  
  : fetch한 걸 저장하지 않는 방법 혹은 revalidating
- fetch할 때 옵션으로  
  : {next: {revalidate: 10}}을 하면 10초 동안만 캐싱할 것이다 라는 의미  
  : {cache: 'no-store'}하면 캐싱을 하지 않겠다는 의미

- 터미널에서 보는 법
  MISS : 캐싱된 데이터가 없어서 요청함
  HIT : 캐싱된 데이터를 사용했다

### ERRORS

**404 NOT FOUND**  
nextJS에서는 존재하지 않는 path가 왔을 때 기본적으로 제공하는 not found 페이지가 있지만, 커스터마이징을 하고 싶다면 pages 폴더에 `404.js` 파일을 만들면 404페이지를 만들 수 있다.

**500번대 에러**  
pages폴더 아래 `_error.js` 파일을 만들면 된다.
해당 페이지는 정적으로 최적화되지는 않는다. 왜냐하면 서버로 에러를 넘기는 작업이 빈번하기 때문

### web storage

nextJS는 client 사이드를 랜더하기 전에 server 사이드 랜더를 먼저 실행한다. 따라서 SSR과 CSR이 혼재하는 nextJS에서의 web-storage 관련 에러는 심심치 않게 난다. 따라서 nextJS에서의 웹스토리지 사용법을 정리한다.

1. CSR일 때 사용한다.

- useEffect 안에서 사용한다.

2. 클래스를 사용한다.

- componentDidMount 안에서 사용한다.
