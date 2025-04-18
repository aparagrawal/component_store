import React, { useEffect, useState } from "react";

function ProgressBar() {
	const [bar, setBar] = useState(0);
	const [show, setShow] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			setBar((prevBar) => {
				if (prevBar >= 100) {
					clearInterval(interval);
				}
				return Math.min(prevBar + 3, 100);
			});
		}, 150);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div>
			{show && (
				<div className="progress-container">
					<div
						style={{ transform: `translateX(${bar - 100}%)` }}
						className="progress-bar"
					></div>
				</div>
			)}

			<button onClick={() => setShow(!show)}>toggle</button>
		</div>
	);
}

export default ProgressBar;
