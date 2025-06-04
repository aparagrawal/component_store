import React, { useEffect, useRef, useState } from "react";
import data from "../CarouselData.json";

export default function Carousel() {
	const [index, setIndex] = useState(0);

	const DATA_LENGTH = data.length;

	const ref: any = useRef(null);

	const handleNext = () => {
		setIndex((prevIndex) => {
			if (prevIndex === DATA_LENGTH - 1) {
				return 0;
			} else return prevIndex + 1;
		});
	};
	const handlePrevious = () => {
		if (index === 0) {
			setIndex(DATA_LENGTH - 1);
		} else setIndex(index - 1);
	};

	useEffect(() => {
		ref.current = setInterval(handleNext, 1000);

		return () => {
			clearInterval(ref.current);
		};
	}, []);
	return (
		<div
			className="carousel"
			onMouseEnter={() => clearInterval(ref.current)}
			onMouseLeave={() => (ref.current = setInterval(handleNext, 1000))}
		>
			<div onClick={handlePrevious} className="left-carousel">
				{"<"}
			</div>
			<img src={data[index].download_url} alt="" />
			<div onClick={handleNext} className="right-carousel">
				{">"}
			</div>
		</div>
	);
}
