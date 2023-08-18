## CSR, SSR, SSG를 next.js에서 지원하는 방법

nextJS에서 파라미터가 동적으로 바뀌는 페이지를 빌드 타임에 생성하려면, 해당 컴포넌트에서 `getStaticProps` + `getStaticPaths`함수를 export 해야한다.

### SSR

`getServerSideProps`라는 이름의 함수를 export 하면 클라이언트에서 페이지를 요청할 때 해당 함수가 실행되고 값을 전달하여 랜더링 후 클라이언트에 전달된다.
props로 받는 context로는 params, 요청/응답 쿼리 등이 담겨서 온다

```jsx
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("https://주소");

  return {
    props: { dateTime: res.data.datetime },
  };
};

export default function SSRPage({ dateTime }: SSRPageProps) {
  return (
    <>
    // 이렇게 하면 SEO에 최적화됨
    <Head>
      <title>제목</title>
      <meta name="description" content="내용"></meta>
    </Head>
    <main>
      <TimeSection dateTime={dateTime} />
    </main>
    </ㅗ>
  );
}
```

### SSG

nextJS에서 페이지를 생성할 때 기본으로 적용되는 설정.  
별 다른 설정 없이도 SSG가 생성된다. 하지만 data fetching이 필요한 경우 `getStaticProps`라는 함수를 export하고 함수 내에서 데이터를 받아 리턴하면, 빌드시 `getStaticProps`가 실행되고 리턴하는 값을 컴포넌트에서 받아서 페이지를 미리 랜더링하게 된다.

```jsx
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("https://주소");

  return {
    props: { dateTime: res.data.datetime },
  };
};

export default function SSGPage({ dateTime }: SSGPageProps) {
  return (
    <main>
      <TimeSection dateTime={dateTime} />
    </main>
  );
}
```

**일부 path에 대해 정적페이지를 만들지** 정하는 `getStaticPaths`함수는 paths 키와 fallback 키를 **반드시** 포함시켜야한다.

- paths
  : 어떤 path의 페이지들을 빌드 타임에 생성할지 정하는 배열이다. paths 배열에서 각각의 params 값은 페이지 이름에 있는 파라미터와 일치해야한다.

- fallback
  : 빌드 타임에 생성해놓지 않은 path로 요청이 들어온 경우 어떻게 할지 정하는 것. boolean 또는 blocking 값.

  - false : getStaticPaths가 반환하지 않은 모든 path에 대해 404페이지를 리턴한다.
    - 적은 숫자의 path만 프리랜더링 해야하는 경우
    - 새로운 페이지가 추가될 일이 적은 경우에 사용한다.
  - true : getStaticProps 동작이 바뀌게 된다.

    - getStaticPaths가 반환한 path들은 빌드 타임에 랜더링된다. 하지만 이 외 path들에 대한 요청이 들어온 경우 404 페이지가 아닌 페이지의 fallback 버전을 먼저 보여준다.
    - 백그라운드에서 next.js가 요청된 path에 대해 getStaticProps 함수를 이용하여 html과 JSON 파일을 만든다.
    - 백그라운드 작업이 끝나면 요청된 path에 해당하는 JSON 파일을 받아서 새롭게 페이지를 랜더링한다. 사용자 입장에서는 fallback -> 풀 페이지와 같은 순서로 화면이 변한다.
    - 새롭게 생성된 페이지를 기존의 빌드시 프리랜더링된 페이지 리스트에 추가하여 추후에 같은 요청이 올 경우 랜더링 해 둔 페이지를 보여준다.

      - 데이터에 의존하는 정적 페이지를 많이 가지고 있으나, 빌드시 모든 페이지를 생성하는 것은 너무 큰 작업일때 일부 페이지만 정적 생성하고 fallback 옵션을 true로 설정하면 이후 요청이 오는 것에 따라 정적페이지를 추가하는 방식으로 작업

      ```jsx
      import { useRouter } from "next/router";

      function Post({ post }) {
        const router = useRouter();

        // fallback은 isFallback 값 체크로 처리하면 된다.
        if (router.isFallback) {
          return <div>Loading...</div>;
        }
      }
      ```

  - blocking

    - true일 때와 비슷하게 동작하지만, 최초 만들지 않은 path에 대한 요청이 들어온 경우 fallback상태를 보여주는 것이 아니라 SSR처럼 동작한다.
    - 이 후 true 옵션과 같이 기존의 정적 페이지 리스트에 새로 생성한 페이지를 추가한다.

```jsx
export async function getStaticPaths() {
// fetch 코드 ...
  return (
    // 아래처럼 일일히 수동으로 지정해주면 여러 상황 대응이 어렵다. 따라서 보통 배열로 넘겨준다.
    // paths: [
      // {params: {id: "11"}},
      // {params: {id: "12"}},
      // {params: {id: "13"}},
    // ],
    paths: data.map(item => {
      params: {
        id: {item.id}
      }})
    fallback: false;
  )
}
```

### ISR

SSG와 동일하지만 일정시간마다 알아서 페이지를 업데이트 해준다는 차이가 있다.
revalidate 값만 주면, 해당 주기마다 데이터의 최신 여부를 검사하고 최신화 해준다.

```jsx
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("https://주소");

  return {
    props: { dateTime: res.data.datetime },
    // SSG에서 revalidate 값만 설정하면 된다.
    revalidate: 20,
  };
};

export default function ISR20Page({ dateTime }: ISR20PageProps) {
  return (
    <main>
      <TimeSection dateTime={dateTime} />
    </main>
  );
}
```

### Reference

    - https://velog.io/@bbaa3218/Next-js-SSG-SSR-ISR
