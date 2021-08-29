import React from 'react';
import { useRouter } from 'next/router';

const Data: React.VFC = () => {
	const router = useRouter();

	const sumNum = Number(router.query.count);
	const num = sumNum;

	var timeD = Math.floor(num / (24 * 60 * 60));
	var timeH = Math.floor((num % (24 * 60 * 60)) / (60 * 60));
	var timeM = Math.floor(((num % (24 * 60 * 60)) % (60 * 60)) / 60);
	var timeS = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
	var timeDMS = timeD + '日' + timeH + '時間' + timeM + '分' + timeS + '秒';

	return (
		<div>
			<dl>
				<dt>合計学習時間</dt>
				<dd>{timeDMS}</dd>
			</dl>
		</div>
	);
};

export default Data;
