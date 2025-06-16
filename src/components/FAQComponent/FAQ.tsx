import React, { useState } from "react";
import Qna from "./Qna";

function FAQ({ data }: { data: any }) {
	const [showIndex, setShowIndex] = useState(-1);

	const handleQna = (index: number) => {
		setShowIndex((prevIndex) => {
			if (prevIndex === index) {
				return -1;
			}
			return index;
		});
	};

	return (
		<div>
			{data.faqs.map((item: any, index: number) => {
				return (
					<Qna
						qna={item}
						showAns={index === showIndex}
						handleQna={() => handleQna(index)}
					/>
				);
			})}
		</div>
	);
}

export default FAQ;
