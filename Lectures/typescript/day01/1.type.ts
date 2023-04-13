// let num:number = 'juram';  -> 에러 발생
let num: number = 1;
let str: string = "hello, typescript";
let bool: boolean = false;
let nullVar: null = null;

// 함수타입
// 타입추론
function add(num1: number, num2: number) {
  return num1 + num2;
}

// 좋지 않은 예시
// any, unknown, object, Function
// 타입이 명확히 제시되어있지 않은 것들
let anything: any = "string";
// any는 어떠한 타입이든 될 수 있는 언어
// unknown은 타입을 알 수 없음(any보다는 낫다)
let obj: object = {
  // 어떤 키 값이 있던 객체
};

function map(callback: Function) {}

// 배열, 튜플
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["hi", 123];

// Map
const myMap = new Map<string, number>();
myMap.set("one", 1);

// 객체의 이름이 같고, 몇개 없을 땐 Map객체를 쓰는게 훨~씬 좋다
// 몇천개 몇만개 되는 배열에서 값을 찾으려면 map을 set으로 바꾸고 찾는게 빠름
// set으로 바꾸면 키값이 해쉬 암호화가 된 값이 되어 더 빨리 찾음(검사하는 용도에서 추천)

// 함수 반환 타입
// void는 반환 타입이 없을 때 기능만 있을 때
const printing = (): void => {
  console.log("name");
};

// never는 반환 타입이 없을 때, 무한루프나 에러 throw할때
const error = (message: string): never => {
  throw new Error(message);
};
