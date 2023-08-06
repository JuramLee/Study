// ================================================기본타입================================================

// number
const id: number = 4;

// string
const title: string = '쏙쏙 들어오는 함수형 코딩';

// boolean
const isSold: boolean = false;

// any
let anything: any = 18000;
anything = '도둑맞은 집중력';
anything = true;

// object
const book1: object = {};
// book1.title = '도둑맞은 집중력';   // Property 'title' does not exist on type 'object'.

let book2: object = {
  title: '세이노의 가르침',
  price: 35000,
};
// book2.title = '쏙쏙 들어오는 함수형 코딩';   // Property 'title' does not exist on type 'object'.
// 이처럼 타입을 object로 주면 키값으로 접근하여 추가나 변경이 안된다.

// type alias
type BookType = {
  title: string;
  price: number;
  author: string;
};

// interface
interface IBookType {
  title: string;
  price: number;
  author: string;
}

// array
/*2가지 형태로 타이핑이 가능하다.
    1. 타입[]
    2. Array<타입> */
let books1: string[] = ['불편한 편의점', '꿀벌의 예언 1'];
let books2: Array<string> = ['비가 오면 열리는 상점', '역행자'];

// unknown -> any와 같은 뜻이다.
/* unknown과 any의 차이는 '엄격함'이다.
    any의 경우 지원하지 않는 메소드를 사용하면 에러가 아닌 undefined를 반환한다.

    하지만 unknown의 경우 할당된 값이 어떤 타입인지 모르기 때문에 함부로 연산할 수 없다.
    따라서 unknown으로 타이핑 후 숫자를 할당해도 숫자에서 사용할 수 있는 메소드를 입력하면 에러가 뜬다.
    -> 이는 typeof 연산자를 통해 해결 가능하다. */
const whatBook: unknown = 'd';
// whatBook.length;    // 'whatBook' is of type 'unknown'.
if (typeof whatBook === 'string') console.log('unknown의 타입은 string입니다.');

// union
let bookUnion: string | number;
bookUnion = '문과 남자의 과학 공부';
bookUnion = 19000;
/* 주의 사항
매개변수의 타입을 type 혹은 interface를 유니온으로 타이핑한다면
유니온들 중에 어떤 타입으로 올지 모르기 때문에 모든 유니온 타입들의 공통 속성만 접근 가능하다.  */

// conditional
/* conditional type은 삼항 연산자와 비슷하다. 
infer 키워드를 사용하여 타입 추론을 할 수 있다.
*/
type bookA = {
  id: number;
  title: string;
  price: number;
};

type bookB = {
  id: number;
  author: string;
  location: string;
};

type whichBook<T> = T extends BookType ? bookA : bookB;
type bookTypeCheck = whichBook<IBookType>; // bookB

// enum
/* 양방향 맵핑이 이뤄진다.
아무 값을 설정하지 않으면 0부터 시작되고 1씩 증가된 값이 할당된다.
하지만 어떤 값을 설정하면 그다음 키부터는 이전 값에 1 증가된 값이 된다. */
enum BookStore {
  YP = 10,
  GB = 22,
  ALD,
}
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
const magazine1 = ['vogue', 1] as const;
const magazine2 = <const>['vogue', 1];

// optional
/* 속성 중 있어도 되고 없어도 되는 속성에 ? 추가하면 타입 검사시 필수항목이 아니게 된다. */
interface INewBook {
  title: string;
  author?: string; // optional로 타입 사용시 없어도 타입 검사 통과
}

// satisfies
/* TS 4.9 버전에 추가된 연산자이다.
satisfies로 작성한 타입과 비교 대상의 타입이 일치하는지 확인 할 수 있다. 
satisfies가 생겨나기 이전에는 유니온 타입으로 타이핑을 했을 경우 해당 타입에서 사용가능한 메소드를 맞게 썼음에도 불구하고 오류가 날 때가 있었다. */
// 예를 들어
const abc1: Record<'a' | 'b', string | number> = {
  a: '가나다라',
  b: 10,
};
// abc1.a.toUpperCase(); // 이 경우 abc가 number 일수도 있으니 에러가 뜬다.

// 여기서  satisfies를 사용하면 타입을 명확하게 알려줄 수 있다.
type satisfiesExample = 'a' | 'b';
const abc2 = {
  a: '테스트',
  b: 10,
} satisfies Record<satisfiesExample, string | number>;

abc2.a.toUpperCase();

// -------------------------------------------------------

type Category = 'Novel' | 'Poetry' | 'Essay' | 'Etc';

const SortCategory = {
  Novel: '소설',
  Poetry: '하늘과 바람과 별과 시',
  Essay: '나는 나로 살기로 했다',
  // Etc: 100,  // Type 'number' is not assignable to type 'string'.
  // } satisfies Record<Category, string>;
  Etc: 100,
} satisfies Record<Category, string | number>;

// Record<Keys, Type>
/* 키 자리에 오는 값과 타입 자리에 오는 모든 속성을 다 가지고 있어야한다. */
interface IKey {
  id: number;
  owner: string;
}
type Key = '가' | '나' | '다';

const keyCheck: Record<Key, IKey> = {
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
두가지 이상의 타입에서 동작하는 컴포넌트를 생성하는데 사용된다. 
사용 시점에 T 자리에 들어오는 타입으로 T가 전부 치환된다.*/
function BookCover<T>(subject: T): T {
  return subject;
}

BookCover<number>(1);
// 표현법1
let myBookCover: <T>(arg: T) => T = BookCover;
console.log(myBookCover); // [Function: BookCover]
// 표현법2
let myBookCoves: { <T>(arg: T): T } = BookCover;
// BookCover<number>('12');  // Argument of type 'string' is not assignable to parameter of type 'number'.

// extends 키워드로 제약 조건을 걸 수 있다. 아래와 같이 걸어주면 T는 string 아니면 number만 가능하다.
function BookCover2<T extends string | number>(subject: T): T {
  return subject;
}

// keyof 키워드로 비교할 수 있다.
// 아래의 예시처럼 사용하면 U는 T의 키값으로 한정되어 T로 들어오는 객체의 키만 가질 수 있다.
const RentBook = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};
RentBook({ ㄱ: 1, ㄴ: 2, ㄷ: 3 }, 'ㄱ');

// 제네릭 화살표 함수
/* .ts 파일에서는 정상 작동하나 .tsx는 JSX도 포함되어 있기 때문에 태그 문제가 발생한다.
따라서 extends를 사용하여 제네릭 화살표 함수라고 알려줘야한다.  */
let FindBook1 = <T>(book: T): T => {
  return book;
};

let FindBook2 = <T extends {}>(book: T): T => {
  return book;
};

// ============================================고급타입(Util Type)============================================

// Partial<Type>
/* 사용하는 타입의 모든 속성을 optional로 바꾸는 기능이다. 
반대의 기능을 하는 타입은 Required<Type>이다. */
const myBook1: Partial<BookType> = {
  title: '이건 내 책이야',
}; // BookType에 있는 속성중 일부만 가지고 와도 된다.

// Pick<type, Keys>
/* keys에 string literal 혹은 유니온 타입이 와야한다. */
type BookOnlyTitleType = Pick<IBookType, 'title'>;
const myTitle: BookOnlyTitleType = {
  title: '제목만 있어야함',
  // price: 2900,  // Object literal may only specify known properties, and 'price' does not exist in type 'BookOnlyTitleType'.
};

// Omit<Type, Keys>
/* Pick 타입에 반대되는 타입으로 keys에 들어가는 속성을 제외하고 나머지를 가져온다. */
type BookWithoutTitleType = Omit<IBookType, 'title'>;
const noTitle: BookWithoutTitleType = {
  // title: '어라 왜 제목이 있지?',   // Object literal may only specify known properties, and 'title' does not exist in type 'BookWithoutTitleType'.
  author: '이주람',
  price: 90000,
};

// ReturnType<Type>
/* Type의 반환 타입으로 구성된 타입을 생성하는 타입이다.
특정 함수의 출력을 다른 함수에서 가져와야 하는 상황에서 유용하다. */
function BSample(): string {
  return 'sample';
}

type B1 = ReturnType<() => string>; // type B1 = string;
type B2 = ReturnType<typeof BSample>; // type B2 = string;
type B3 = ReturnType<any>; // type B3 = any;
type B4 = ReturnType<never>; // type B4 = never;

// 그 외 그냥 원시 타입 혹은 리턴타입이 정의되어있지 않는 타입은 들어가면 안됨
// type B5 = ReturnType<Function>;  // Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// type B6 = ReturnType<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type B7 = ReturnType<null>;
// type B8 = ReturnType<undefined>;
// type B9 = ReturnType<void>;

export {};
