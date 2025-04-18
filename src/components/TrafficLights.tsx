import React, { useEffect, useState } from "react";
import Signal from "./Signal";

function TrafficLights({ lights = ["green", "yellow", "red"] }) {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prevIndex) => {
				return (prevIndex + 1) % lights.length;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div>
			{lights.map((color: string, index: number) => {
				return <Signal color={color} isActive={active === index} />;
			})}
		</div>
	);
}

export default TrafficLights;
