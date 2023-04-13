/*
	Generics: 타입을 인자로 받아서 여러 곳에서 사용할 수 있는 타입이나 함수
	예를 들어 generic이 없다면?

	function f1 (a: number, b: number): number[] {
		return [a, b]
	}

	function f2 (a: string, b: string): string[] {
		return [a, b]
	}

	결론은 generic을 사용하면 여러개의 함수에서 비슷한 로직을 수행할 때
	코드의 중복을 없애고 더욱 안정된 상황에서 개발이 가능하다

	=> 타입의 유연성을 높인다 => 매개변수와 반환값의 타입을 동적으로 설정해야할 때 유리함
*/

const checkNull = (arg: number | null): number => {
  if (!arg) throw new Error("값이 비어있습니다."); // === console.error();
  return arg;
};

type User = {
  name: "이주람";
};

const checkNullG = <T extends User>(arg: T | null): T => {
  if (!arg) throw new Error("값이 비어있습니다."); // === console.error();
  console.log(arg.name);
  return arg;
};

checkNullG({
  name: "이주람",
});
// => T는 이름 지어줄 수 있고, 사용했을 때의 매개변수의 타입이 T값으로 대입되는 느낌
