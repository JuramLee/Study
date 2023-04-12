import MyButton from "@components/Button/Button";
import React, { useRef, useState } from "react";

type State = {
  name: string;
};

const MainPage: React.FC = () => {
  const [state, setState] = useState<State>({ name: "" });

  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  /*
	const res = axios<User>() axios도 리턴타입 generic으로 줄 수 있다
  */

  return (
    <MyButton
      variant={"primary"}
      shape={"round"}
      size={"small"}
      onClick={() => {}}
    />
  );
};

export default MainPage;
