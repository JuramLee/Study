import { useMutation, useQueryClient } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { addModalAtom } from "atoms/ui.atom";
import { QUERY_KEY } from "consts/queryKey";
import { useSetRecoilState } from "recoil";

const useAddTodo = () => {
  const setAddModal = useSetRecoilState(addModalAtom);
  const queryClient = useQueryClient();

  return useMutation((todo) => TodoApi.addTodo(todo), {
    onSuccess: () => {
      // 개발자가 원할 때 새로운 요청을 할 수 있는 로직
      // 캐싱해두던 데이터를 날려서 새로 요청하게 하는 로직. 쿼리의 키값으로 재요청하기 때문에 정확하게 입력해야함
      queryClient.invalidateQueries(QUERY_KEY.GET_TODO);
      setAddModal(false);
    },
  });
};

export default useAddTodo;
