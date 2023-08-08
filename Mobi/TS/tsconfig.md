## tsconfig 옵션 파헤치기

### **tsconfig의 역할은 무엇인가?**

vscode는 기본적으로 TS에 대한 `intellisense`를 지원한다.
`intellisense`가 .ts 파일을 인식하는 방법을 제어하기 위해 tsconfig.json을 작성해야한다.
(`intellisense`는 코딩을 보다 편리하게 하는 기능 집합)

  <br/>

### **왜 사용하는가?**

매번 명령어에 옵션을 주기보다 설정으로 일정하게 적용하기 위해

  <br/>

### **tsconfig는 어디까지의 역할을 할 수 있을까?**

  <br/>

### **tsconfig에서 주요 옵션을 확인하고 정리해봅시다**

- **include**  
   만약 glob 패턴에 파일 확장자를 입력하지 않으면 TS가 지원하는 확장자만 포함됨  
  .ts, .tsx, .d.ts가 있으며 allowJs를 활성화 시키면 .js와 .jsx도 포함된다.

```
	*	: 없거나 하나 이상의 문자열과 일치 (디렉터리 구분자 제외)
	?	: 하나의 문자와 일치 (디렉터리 구분자 제외)
	**/	: 단계에 관계없이 아무 디렉터리와 일치
```

- **exclude**  
  exclude는 include에 지정한 파일이나 패턴을 제외할 수 있다  
  include에 지정하지 않은 파일은 적용안된다는 점 참고.

  exclude를 지정하지 않으면 ["node_modules", "bower_components", "jspm_packages"]와 outDir에 지정한 경로가 기본값이 된다.

    <br/>

- **compilerOptions**

### **tsconfig를 활용하여 ts project를 만들고 상대 경로를 절대 경로로 만들어 import 해보세요**

baseURL과 paths를 설정하면 절대경로로 설정할 수 있다.  
하지만 ts-node를 이용해 실행하면 오류가 난다. 왜냐? tsconfig.json 설정은 경로 alias만 준거지 실제 경로를 바꾼게 아니기 때문 => 따라서 별도로 tsconfig-paths와 tsc-alias라는 모듈을 설치해줘야한다. (npm i -D tsconfig-paths tsc-alias)

그 후 tsconfig.json에서 전역 속성으로 추가해줘야함.

```
 "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
```

```jsx
"baseUrl": "./", // 절대 경로 모듈이 아닌, 모듈이 기본적으로 위치한 디렉토리 설정
"paths": { // 'baseUrl'을 기준으로 상대 위치로 가져오기를 다시 매핑하는 항목 설정
	"@components/*": [
		"src/components/*" // import {} from '@components/파일' 할때 어느 경로로 찾아들어갈지 paths 설정
		],
	"@utils/*": [
		"src/utils/*"
		],
},
```

<br/>

```jsx
{
    "compilerOptions": {
        "typeRoots" : ["./typings"],
		// 타입루트를 설정하면 typeRoots 아래에 있는 패키지만 포함
        "target": "es6",
		// 대상 버전 (default는 ES3)
        "lib": ["dom", "dom.iterable", "esnext", "es6"],
		// 컴파일에 포함될 라이브러리 파일 목록. target에 따라 기본 설정되는 lib가 달라짐
        "allowJs": true,
		// JS 파일의 컴파일 허용
        "skipLibCheck": true,
		// 모든 선언파일(.d.ts)의 타입 검사 패스
        "esModuleInterop": true,
		// 런타임 바벨 생태계 호환성을 위함
        "allowSyntheticDefaultImports": true,
		// default export가 없는 모듈에서 default import를 허용(타입검사용)
        "strict": true,
		// 모든 엄격한 타입 검사 옵션 활성화
        "forceConsistentCasingInFileNames": true,
		// 동일 파일 참조에 대해 일관성 없는 대소문자 비활성화
        "noFallthroughCasesInSwitch": true,
		// 스위치 문에 fallthrough 케이스에 대한 오류 보고
        "module": "esnext",
		// 모듈 코드 생성 지정
        "moduleResolution": "node",
		// 모듈 해석 방법 결정
        "resolveJsonModule": true,
		// .json 확장자로 import된 모듈 포함
        "isolatedModules": true,
		// 추가 검사를 수행하여 별도의 컴파일(ex. 트랜스 파일된 모듈)이 안전한지 확인
        "noEmit": true,
		// JS 파일을 생성하지 않도록 하는 설정.
        "jsx": "react-jsx"
		/*
			react : .js 파일로 컴파일 된다. (JSX 코드는 React.createElement() 함수의 호출로 변환됨)
			react-jsx : .js 파일로 컴파일 된다. (JSX 코드는 _jsx() 함수의 호출로 변환됨)
			react-jsxdev : .js 파일로 컴파일 된다. (JSX 코드는 _jsx() 함수의 호출로 변환됨)
			preserve : .jsx 파일로 컴파일 된다. (JSX 코드가 그대로 유지됨)
			react-native : .js 파일로 컴파일 된다. (JSX 코드가 그대로 유지됨)
		*/
    },
    // include와 files 모두 지정되지 않는다면 컴파일러는 기본적으로 exclude속성을 사용하여 제외된 것은 제외하고 모든 TS(.ts, .d.ts, .tsx)파일을 포함하는 하위 디렉토리에 포함시킨다.
    "include": ["src"],
    "files": [
	// 상대 또는 절대 파일 경로 목록을 갖는다
	// 원하는 파일만 tsc가 처리하게 할 수 있다.
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ]
}
```

### Reference

- https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC#tsconfig_%EC%83%9D%EC%84%B1
