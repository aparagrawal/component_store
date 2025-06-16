import React from "react";

function Qna({
	qna,
	showAns,
	handleQna,
}: {
	qna: any;
	showAns: any;
	handleQna: any;
}) {
	return (
		<div className="qna">
			{qna.question}

			<span onClick={handleQna}>{showAns ? "-" : "+"}</span>
			<hr />
			{showAns && qna.answer}
		</div>
	);
}

export default Qna;
