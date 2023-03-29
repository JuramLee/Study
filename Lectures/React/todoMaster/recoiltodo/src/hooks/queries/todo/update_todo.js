import { useMutation, useQueryClient } from '@tanstack/react-query';
import TodoApi from 'apis/todoApi';
import { QUERY_KEY } from 'consts/queryKey';

const useUpdateTodo = () => {
  const client = useQueryClient();

  return useMutation(({ id, data }) => TodoApi.updatePost(id, data), {
    // 낙관적 업데이트
    onSuccess: (res) => {
      const { data } = res.data;
      client.cancelQueries([QUERY_KEY.GET_TODO]);
      // 저장되있는 캐싱 데이터를 삭제하고 재요청X
      // 재요청해도 되지만 화면이 깜빡일것이다.

      // 지워진 공간에 낙관적으로 성공한 결과값을 다시 셋팅해줌
      client.setQueriesData([QUERY_KEY.GET_TODO], (oldData) => {
        let updateData = oldData.data.data.find((todo) => todo.id === data.id);
        updateData.content = data.content;
        updateData.state = data.state;
        return oldData;
      });
    },
  });
};

export default useUpdateTodo;

/*
    update 성공 => 데이터가 변경 => 요청을 새로해야함.
    하지만 우리는 이미 결과값을 알고 있기 때문에 재요청하지 않아도 데이터를 수정할 수 있음
*/
