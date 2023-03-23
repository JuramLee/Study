import { useQuery } from "@tanstack/react-query";
import TodoApi from "apis/todoApi";
import { QUERY_KEY } from "consts/queryKey";

const useGetTodo = (params) => {
  const { data, error, status, isLoading } = useQuery(
    [QUERY_KEY.GET_TODO],
    () => TodoApi.getPost(),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      cacheTime: 1000 * 5 * 60,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: () => {},
      //   suspense: true, // true 아니면 App.js에 Suspense 사용 불가
    }
  );

  return { data, error, status, isLoading };
};

export default useGetTodo;
