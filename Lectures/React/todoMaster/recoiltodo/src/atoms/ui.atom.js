import { atom } from "recoil";

// 모달 닫고 열고 하는 기능
export const addModalAtom = atom({
  key: "addModalAtom",
  default: false,
});
