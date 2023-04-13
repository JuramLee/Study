/* 	enum
	as const
	ReturnType  */

// enum 타입은 해당 값이 enum으로 정의 된 타입 안에 있는지 없는지 열거형 데이터와 일치하는지 검사
// 비슷한 용도로 객체로 선언하여 사용 가능(const, typeAlias)를 사용해도 같은 효과를 볼 수 있지만
// 선언하는 용도가 다름. 안에 데이터 값이 있는지 검사만 할 때는 enum
// 그게 아니라 하나의 객체로서 필요할 경우는 enum이 아니라 그냥 객체로 선언
// enum은 타입으로도 사용할 수 있고 값으로도 사용할 수 있다.
// => 즉 용도가 다름

enum State {
  Idle,
  Loading,
  Success,
  Failure,
}
// 검사하기 위한 용도

const StateObj = {
  Idle: "Idle",
  Loading: "Loading",
  Success: "Success",
  Failure: "Failure",
} as const;

type StateObjType = keyof typeof StateObj;
// 객체 타입의 키를 타입으로 인지하는 것

// as const는 객체 집단을 만들기 위함 상수들의 집합
// as const는 readonly 타입이 됨. 객체라고 하더라도 수정이 불가능
// COLORS와 같은 수정이 되지 않은 상수의 객체는 as const를 활용하여 readonly 상태로 만들고
// 객체의 변경을 방지하고 안전한 상황에서 프로그래밍 할 수 있다

type StateAlias = "Idle" | "Loading";

let state: State = State.Idle;
// enum 값O, 타입O
let stateobj: StateObjType = StateObj.Idle;
// 객체(as const) 값O, 타입X
let stateAlias = "Idle";
// typeAlias 값X, 타입O

// if(state === "Loading")
if (state === State.Idle) {
}

// let stateobj = StateObj.Loading;
// if (stateobj === StateObj.Loading) {
// }
