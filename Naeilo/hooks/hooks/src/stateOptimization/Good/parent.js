import GoodChild from './child';

const GoodParent = () => {
  return (
    <div>
      <div>good parent</div>
      <GoodChild name={'쪼밥이'} />
      <GoodChild name={'똥만이'} />
    </div>
  );
};

export default GoodParent;

// name이 변하는 값이 아니라 보여주기만 한다면 state일 필요가 없다
// 또한 버튼으로 조작하는 show state값 역시 자식 컴포넌트에서 가지고 있으면 랜더링이 해당 부분만 된다.
