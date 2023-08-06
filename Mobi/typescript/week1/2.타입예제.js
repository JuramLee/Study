"use strict";
// ================================================기본타입================================================
Object.defineProperty(exports, "__esModule", { value: true });
// number
var id = 4;
// string
var title = '쏙쏙 들어오는 함수형 코딩';
// boolean
var isSold = false;
// any
var anything = 18000;
anything = '도둑맞은 집중력';
anything = true;
// object
var book1 = {};
// book1.title = '도둑맞은 집중력';   // Property 'title' does not exist on type 'object'.
var book2 = {
    title: '세이노의 가르침',
    price: 35000,
};
// array
/*2가지 형태로 타이핑이 가능하다.
    1. 타입[]
    2. Array<타입> */
var books1 = ['불편한 편의점', '꿀벌의 예언 1'];
var books2 = ['비가 오면 열리는 상점', '역행자'];
// unknown -> any와 같은 뜻이다.
/* unknown과 any의 차이는 '엄격함'이다.
    any의 경우 지원하지 않는 메소드를 사용하면 에러가 아닌 undefined를 반환한다.

    하지만 unknown의 경우 할당된 값이 어떤 타입인지 모르기 때문에 함부로 연산할 수 없다.
    따라서 unknown으로 타이핑 후 숫자를 할당해도 숫자에서 사용할 수 있는 메소드를 입력하면 에러가 뜬다.
    -> 이는 typeof 연산자를 통해 해결 가능하다. */
var whatBook = 'd';
// whatBook.length;    // 'whatBook' is of type 'unknown'.
if (typeof whatBook === 'string')
    console.log('unknown의 타입은 string입니다.');
// union
var bookUnion;
bookUnion = '문과 남자의 과학 공부';
bookUnion = 19000;
// enum
/* 양방향 맵핑이 이뤄진다.
아무 값을 설정하지 않으면 0부터 시작되고 1씩 증가된 값이 할당된다.
하지만 어떤 값을 설정하면 그다음 키부터는 이전 값에 1 증가된 값이 된다. */
var BookStore;
(function (BookStore) {
    BookStore[BookStore["YP"] = 10] = "YP";
    BookStore[BookStore["GB"] = 22] = "GB";
    BookStore[BookStore["ALD"] = 23] = "ALD";
})(BookStore || (BookStore = {}));
console.log(BookStore); // { '10': 'YP', '22': 'GB', '23': 'ALD', YP: 10, GB: 22, ALD: 23 }
console.log(BookStore.YP); // 10
console.log(BookStore[23]); // ALD
/* const enum
컴파일 단계에서 enum이 사용되는 곳에 직접적으로 inline되기 때문에 컴파일시 코드가 사라진다. (사용되는 자리에 치환되고 선언문은 사라진다.)
그냥 enum과 다르게 양방향 관계가 아니다. tree shaking이 된다.
하지만 요즘은 안쓰고 as const를 권장한다.
 */
// as const (const assertion)
/* 타입스크립트에서 let으로 선언하는 것과 const로 선언할때 타입 추론이 다르게 일어난다.
      let a = 'hi';   // let a: string;
      const b = 'hi'; // const b: "hi";

   하지만 객체나 배열을 const로 선언할 때는 let과 동일하게 타입 추론이 일어난다.
   즉, 특정 object에 특정 key가 존재해야하는 것만 지정하지 어떤 value가 와야하는지는 지정할 수 없다.
   TS3.4버전부터 const assertion을 활용하여 const로써 타입 추론이 일어나게 할 수 있다.

      1) 변수 선언문 뒤에 as const를 추가한다. => 이렇게 하면 readonly 옵션이 자동으로 붙는다.
          const b = {
            num: 1,
            str: 'hi'
          } as const;
        --------------
          const b = {
            num: 1 as const,
            str: 'hi'
          };
      2) 리터럴 앞에 <const>를 붙이면 된다. 단, tsx파일에서는 사용이 불가하다.
          const b: <const>{
            num: 1;
            str: "hi";
          }
      3) readonly를 사용한다.
          const b: {
            readonly num: 1;
            readonly str: "hi";
          } */
var magazine1 = ['vogue', 1];
var magazine2 = ['vogue', 1];
// satisfies
/* TS 4.9 버전에 추가된 연산자이다.
satisfies로 작성한 타입과 비교 대상의 타입이 일치하는지 확인 할 수 있다.
satisfies가 생겨나기 이전에는 유니온 타입으로 타이핑을 했을 경우 해당 타입에서 사용가능한 메소드를 맞게 썼음에도 불구하고 오류가 날 때가 있었다. */
// 예를 들어
var abc1 = {
    a: '가나다라',
    b: 10,
};
var abc2 = {
    a: '테스트',
    b: 10,
};
abc2.a.toUpperCase();
var SortCategory = {
    Novel: '소설',
    Poetry: '하늘과 바람과 별과 시',
    Essay: '나는 나로 살기로 했다',
    // Etc: 100,  // Type 'number' is not assignable to type 'string'.
    // } satisfies Record<Category, string>;
    Etc: 100,
};
var keyCheck = {
    가: {
        id: 1,
        owner: '이주람',
    },
    나: {
        id: 1,
        owner: '이주람',
    },
    다: {
        id: 1,
        owner: '이주람',
    },
};
// generic
/* 타입을 마치 함수의 매개변수처럼 사용하는 것을 의미한다.
두가지 이상의 타입에서 동작하는 컴포넌트를 생성하는데 사용된다. */
function BookCover(subject) {
    return subject;
}
BookCover(1);
var myBookCover = BookCover;
console.log(myBookCover);
// BookCover<number>('12');  // Argument of type 'string' is not assignable to parameter of type 'number'.
// ============================================고급타입(Util Type)============================================
// Partial<Type>
/* 사용하는 타입의 모든 속성을 optional로 바꾸는 기능이다.
반대의 기능을 하는 타입은 Required<Type>이다. */
var myBook1 = {
    title: '이건 내 책이야',
}; // BookType에 있는 속성중 일부만 가지고 와도 된다.
var myTitle = {
    title: '제목만 있어야함',
    // price: 2900,  // Object literal may only specify known properties, and 'price' does not exist in type 'BookOnlyTitleType'.
};
var noTitle = {
    // title: '어라 왜 제목이 있지?',   // Object literal may only specify known properties, and 'title' does not exist in type 'BookWithoutTitleType'.
    author: '이주람',
    price: 90000,
};
// ReturnType<Type>
/* Type의 반환 타입으로 구성된 타입을 생성하는 타입이다.
특정 함수의 출력을 다른 함수에서 가져와야 하는 상황에서 유용하다. */
function BSample() {
    return 'sample';
}
