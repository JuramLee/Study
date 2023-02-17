import { useEffect, useState, useRef } from "react";

function TimerModal({count, setCount}) {

	const TimerRef = useRef();

	useEffect(() => {
		// 컴포넌트가 처음 보였을 때(마운트)
		TimerRef.current = setInterval(() => {
			setCount((prev) => prev + 1);
			console.log(count)
		}, 1000);

		// 컴포넌트가 사라졌을 때(언마운트)
		return () => {
			clearInterval(TimerRef.current);
			setCount(0);
		}
	}, []);

	// useEffect(() => {
	// 	if(count === 0) return;
	// 	console.log(count);
	// }, [count]);
	
	return <div>{count}</div>
	
}

export default TimerModal;