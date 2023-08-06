export {};

/* Type alias와 interface의 차이
    1) 가장 큰 차이점은 선언병합이 되냐 안되냐이다.
       type alias는 선언병합이 되지 않고, interface는 가능하다. 
       따라서 확장성이 요구되는 api나 라이브러리 사용시에는 interface를 쓰는것이 좋다.
    2) Type alias는 모든 타입을 선언할 때 사용이 가능하지만 interface는 객체에 대한 타이핑 때 사용된다.
       유니온 타입, 기본 타입, 튜플, 리터럴 타입 등과 같은 다양한 타입을 사용해야 하는 경우 Type alias
*/

// 타입 별칭
type PropsT = {
  name: string;
  age: number;
};

// 인터페이스
interface IProps {
  name: string;
  age: number;
}

/*
이 예에서 타입 별칭과 인터페이스는 모두 동일한 타입을 정의하나
인터페이스는 타입 검사를 더 엄격하게 수행함!
-> 타입 별칭은 일반적으로 더 간단하고 가벼운 유형 검사가 필요한 경우에 사용.
-> 인터페이스는 더 강력한 유형 검사가 필요한 경우에 사용 */

interface IUser {
  name: string;
}

interface IUser {
  age: number;
}

// 병합된 인터페이스
/*
interface IUser {
  name: string;
  age: number;
}
*/

type TUser = {
  name: string;
};

// 에러: 중복된 이름에 대해 Type alias X 불가
// type TUser = {
//   age: number,
// };

interface IPerson {
  name: string;
}

interface IEmployee extends IPerson {
  title: string;
}

class Employee implements IEmployee {
  name!: string;
  title!: string;
}

const removeError: PropsT | IProps | IUser | TUser | Employee = {
  name: '이름',
  age: 12,
};
console.log(removeError);

/* 타입별칭과 인터페이스 혼용해서 사용 가능
- 서로 다른 유형 간의 관계를 정의하는 데
  예) 인터페이스를 사용하여 객체의 구조를 정의 + 타입 별칭을 사용하여 유니온 타입을 정의하는 경우의 사례 */

interface Fruit {
  name: string;
  taste: string;
}

interface Vegetable {
  vitaminContents: string;
  name: string;
  vitamin: number;
}

type market = Fruit | Vegetable;

const apple: market = { name: 'apple', taste: 'sweet' };
const carrot: market = { name: 'carrot', vitamin: 50, vitaminContents: 'A' };

function showItemInfo(item: market) {
  if ('taste' in item) {
    console.log(`Fruit: ${item.name}, Taste: ${item.taste}`);
  } else {
    console.log(
      `Vegetable: ${item.name}, Vitamin Contents: ${item.vitaminContents}`
    );
  }
}

showItemInfo(apple);
showItemInfo(carrot);

/* Reference
- interface vs type alias(https://tecoble.techcourse.co.kr/post/2022-11-07-typeAlias-interface/)
 */
