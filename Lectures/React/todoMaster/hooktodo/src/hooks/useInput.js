const { useState } = require("react")

// custom hook이라고 부름
/*
	hook 함수를 사용하여 정의한 함수
	어디서나 재사용 될 수 있어야 함
*/

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	}

	return [value, onChange, setValue];
}

export default useInput;