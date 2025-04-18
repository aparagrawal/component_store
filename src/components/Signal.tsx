import React from "react";

function Signal({ color, isActive }: { color: string; isActive: boolean }) {
	return (
		<div
			style={{ backgroundColor: `${isActive ? color : "grey"}` }}
			className="signal"
		></div>
	);
}

export default Signal;
