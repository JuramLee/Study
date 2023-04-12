// 추상체
// 백엔드에게 받아온 데이터는 주로 interface를 쓴다
// interface는 '상속'이 된다 (intersection &와 같은 기능, typeAlias랑 차이는 없다)

// typeAlias, interface의 선택은 개발자의 취향!
// 반드시 interface를 사용해야하는 경우(상속 extends)는 interface를 쓰는게 좋다
// 백엔드랑 통신하는 데이터는 interface를 쓰는게 좋다
// 중복선언이 가능하다 (typeAlias는 불가능)

{
  interface User {
    userId: number;
    name: string;
  }

  /* type User = {
		userId: number;
		name: string;
	};  */

  interface Post {
    postId: number;
    content: string;
    user: User; //객체
  }

  // 상속 User의 type을 Student가 상속 받아서 사용
  // typeAlias의 intersection과 유사

  interface Student extends User {
    name: string;
    score: number;
  }
}
