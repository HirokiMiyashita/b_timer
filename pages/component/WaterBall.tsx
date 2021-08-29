import { useRouter } from 'next/dist/client/router';
import { useState, useCallback, useRef } from 'react';

const WaterBall: React.VFC = () => {
	// 値の初期設定
	const router = useRouter();
	const [count, setCount] = useState(0);
	const intervalRef = useRef(null);
	// タイマーの開始
	const start = useCallback(() => {
		if (intervalRef.current !== null) {
			return;
		}
		intervalRef.current = setInterval(() => {
			setCount((prevState) => prevState + 1);
		}, 1000);
	}, []);
	// タイマーの停止
	const stop = useCallback(() => {
		if (intervalRef.current === null) {
			return;
		}
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	}, []);

	const dateMove = () => {
		router.push({
			pathname: './Calculations/Data',
			query: { count },
		});
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={start}>start</button>
			<button onClick={stop}>stop</button>
			<button onClick={dateMove}></button>
		</div>
	);
};
export default WaterBall;
