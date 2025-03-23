import React from "react";
import { useState } from "react";

const Accordian = ({ qna }: { qna: any }) => {
	const [showToggle, setShowToggle] = useState(false);
	return (
		<div className="accordian">
			<h3>{qna.qs}</h3>{" "}
			<span onClick={() => setShowToggle(!showToggle)}>
				{showToggle ?'-':'+'}
			</span>
			{showToggle && <h3>{qna.ans}</h3>}
		</div>
	);
};

export default Accordian;
