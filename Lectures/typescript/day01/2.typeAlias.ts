{
  // 타입 지정, 정의  => 자유도가 올라감
  type Text = string;
  let str: Text = "string";

  type TextString = "들어가야하는 값 지정";
  let str2: TextString = "들어가야하는 값 지정";

  type User = {
    userId: number;
    name: string;
  };

  type Post = {
    postId: number;
    content: string;
    user: User; //객체
  };

  //   const post: Partial<Post> = {
  const post: Post = {
    // comment: [] Post 타입에는 comment 키값이 없기 때문에 추가할 수 없음
    content: "안녕하세요",
    postId: 1,
    user: {
      name: "뭐시기",
      userId: 3,
    },
  };

  // Partial을 적어주면 지정해둔 type에 있는 키 값을 꼭 다 쓰지 않아도 된다

  // union
  type Store = "food" | "clothes";
  const store = (product: Store) => {
    console.log(product);
  };

  store("clothes");

  // intersection type => 두 타입의 키값 모두 충족시켜줘야함

  type Student = {
    name: string;
    score: number;
  };

  const internet = (person: Student & User) => {
    console.log(person);
  };

  internet({
    userId: 1,
    name: "test",
    score: 100,
  });

  type COLOR = {
    [key: string]: string;
  }; // 이렇게 하면 자동완성 지원X / 키값과 벨류값이 string이라는 확신이 있을 때 사용

  // 자동완성X -> 다른 개발자에게 어떤 형태의 객체인지 알려주는 용도의 문서화 기능만 함

  const COLORS: COLOR = {
    grey: "#E5E5E5",
    red: "#FEFEFE",
  };
}
