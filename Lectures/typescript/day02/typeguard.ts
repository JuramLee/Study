// typeguard에서는 is, in, typeof를 가장 많이 씀

interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  side: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.type === "circle"; //true
}

function getArea(shape: Shape): number {
  // shape == Circle
  if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    // shape == Square => 이미 isCircle()로 11번째 줄에 or조건 중 하나인 경우를 처리해줬으니 아래는 Square일 때만 나옴 (타입가드)
    return shape.side * shape.side;
  }
}

function print(name: string | number) {
  if (typeof name === "string") {
    console.log(name.toUpperCase()); // string으로 단언되니 string타입의 빌트인 함수 접근 가능
  } else {
    console.log(name.toFixed()); // number로 단언되니 number타입의 빌트인 함수 접근 가능
  }
}

const Form = {
  login: "login",
  sign: "sign",
} as const;

type FormType = keyof typeof Form;
// keyof는 typeof 타입의 키값만 가져온다

const onFormChange = (e: MouseEvent) => {
  const { innerText } = e.target as HTMLDivElement;
  if (innerText in Form) {
    // setForm(innerText.toLowerCase() as FormType)  // innerText는 string이니까 as FormType으로 타입 가드
  }

  return alert("치명적인 에러가 발생하였습니다.");
};

/*
	타입 가드는 코드의 가독성을 높이고 코드의 흐름을 명확하게 표현하며 변수의 타입을 보다 안정적으로 보장할 수 있는 방법
	특정 조건을 만족하는 경우 타입을 변경하도록 정의

	=> 이를 통해 타입이 런타임에서 변경되는 것을 방지할 수 있음

	*안정성*
	예를 들면 함수의 매개변수는 타입이 정해져있지 않고 함수 내에서 분기점(리턴이 달라지는것)으로 인해 다양하게 사용이 가능
	이 경우 타입 내에서 해당 매개변수의 타입의 정확한 타입을 보장하여 개발의 안정성을 상승하기 위해 사용
*/
