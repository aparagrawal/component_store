import React, { useEffect, useRef, useState } from "react";

function TypeEffect({ text, delay }: { text: string; delay: any }) {
	const [displayText, setDisplayText] = useState(text);
	const velocityRef = useRef({ speed: 1, endIndex: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			if (velocityRef.current.endIndex === text.length) {
				velocityRef.current.speed = -1;
			} else if (velocityRef.current.endIndex === 0) {
				velocityRef.current.speed = 1;
			}
			velocityRef.current.endIndex += velocityRef.current.speed;
			setDisplayText(text.slice(0, velocityRef.current.endIndex));
		}, delay);

		return () => {
			clearInterval(interval);
		};
	}, [delay, text]);
	return (
		<>
			<div>TypeEffect</div>
			<h1>{displayText}</h1>
			<span>|</span>
		</>
	);
}

export default TypeEffect;
