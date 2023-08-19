## nextJS에서의 CSR

nextJS에서 CSR을 구현하기 위해서는 최상단에 "use client"`를 추가하면 된다.

## Babel, Terser and SWC

### Babel

바벨은 자바스크립트 빌드 툴 중 트렌스파일러에 속한다.
완전히 다른 언어의 변환을 해주는 건 컴파일러이고, 트렌스파일러는 유사한 두 언어간 변환의 역할을 한다.  
즉, 쉽게 말해 구버전에서의 최신 문법을 이해하도록 변환해준다고 생각하면 된다.

### Terser

Terser는 코드 경량화 해주는 역할로 parser, mangler, compressor로 이뤄진 빌드 툴이다.

- mangler : 소스코드에 존재하는 네이밍들을 의미없는 문자로 바꿔 코드의 크기를 줄이는 역할

- compressor : 코드를 분석하고 동일한 기능을 구현가능할 정도의 간단한 코드로 변환해주는 역할

### SWC(Speedy Web Compiler)

SWC는 컴파일과 번들링 모두에 사용될 수 있는 Rust라는 언어로 제작된 빌드 툴이다.
nextJS에서는 SWC를 기반으로 개발한 컴파일러를 통해 바벨과 Terser를 대체한다. 교체함으로써 매우 빨라졌다고 하는데 빨라진 이유는 Rust 라는 언어가 자바스크립트와 다르게 `병렬 처리`를 고려해서 설계된 언어라 동시에 여러 파일을 처리할 수 있기 때문이다.

```
// 터미널에 gnomon 설치
npm install -g gnomon
```

nextJS 12버전부터 기본적으로 SWC가 바벨을 대체하도록 설정되어 있지만 Terser의 작업도 SWC에 넘기기 위해선 별도의 작업이 필요하다.  
`next.config.js`에 내용을 추가한다.

```jsx
module.exports = {
  reactStrictMode: true, // 초기 세팅에 이미 포함된 내용입니다.
  swcMinify: true, // 코드 경량화 작업에 Terser가 아닌 SWC를 사용합니다.
};
```

그다음에 아래 명령어를 터미널에 입력하면 빌드에 걸리는 시간을 확인할 수 있다.

```
npm run build | gnomon --type=elapsed-total
```

nextJS 12버전부터 default로 설정된 SWC를 바벨로 변경하기 위해서는 프로젝트 루트에 `.babelrc`파일이 존재하기만 하면 된다.

```jsx
// babelrc 파일 내에 입력한다.
{
    "presets": ["next/babel"] // Next.js 프로젝트 빌드를 위한 플러그인들이 모여있는 프리셋입니다.
}
```

### Reference

    - https://fe-developers.kakaoent.com/2022/220217-learn-babel-terser-swc/
