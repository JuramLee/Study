## type-guard

### 타입 가드란?

컴파일러가 타입을 예측할 수 있도록 타입의 범위를 축소시켜주는 것(내로잉 narrowing)

참고로 TS는 if(객체.key) 이런식으로 참/거짓 여부를 확인하지 못한다.

TS는 콜백함수 내에서 타입가드가 유효하다고 판단하지 않기 떄문에 이를 해결하기 위해 로컬 변수를 선언하고 해당 변수에 타입을 지정해준다.

- **typeof**  
  typeof 뒤에 오는 타입이 맞는지 아닌지 판별  
  typeof의 피연산자로 올 수 있는 것은 원시타입 및 객체로 제한됨(null type은 object를 반환함) => 즉 type alias, interface로 정의한 타입은 사용 못함

  ```jsx
  function test(item) {
    if (typeof item === "string") {
      /*...item의 타입이 string일 경우 실행됨...*/
    }

    // item의 타입이 string이 아니라고 vscode가 인식
    return;
  }
  ```

- **instanceof**  
  특정 개체가 특정 클래스에 속하는지 판별

  ```jsx
  class A {
    id: number;
    name: string;
  }

  class B {
    id: string;
    price: number;
  }

  function checkAorB(item: A | B) {
    if (item instanceof A) {
      /*item이 A 타입이라고 인식*/
    }

    if (item instanceof B) {
      /*item이 B 타입이라고 인식*/
    }
  }
  ```

- **is** (타입 서술어 type predicate)  
  반환값이 true이면 함수 내부에서도 해당 타입으로 확정시킴

  ```jsx
  function isOkay(item: any): item is string {
  return typeof item === 'number';
  }
  ```

- **in**  
  객체 내부에 특정 속성이 존재하는지 판별

```jsx
interface A {
  id: number;
  name: string;
}

interface B {
  id: string;
  price: number;
}

function checkAorB(item: A | B) {
  if ("name" in item) {
    /*item: A*/
  } else {
    /*item: B*/
  }
}
```

### Reference

- https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard
