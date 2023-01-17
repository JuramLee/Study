export const print = () => {
    console.log('반갑습니다.');
};

export function TodoPage() {
    return (
        <>
            <div>TO-DO</div>;
        </>
    );
}

const test = 'test';
export default test;

// export default 되어 있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있고
// export 되어 있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명을 이용해서  key값을 가져와야함
