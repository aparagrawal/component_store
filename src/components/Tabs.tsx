import React, { useState } from "react";

function Tabs({ tabsData }: { tabsData: any }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className="tabs">
			<div className="tabs_container">
				{tabsData.map((item: any, index: number) => {
					return (
						<button
							className={`${currentIndex === index ? "active" : ""}`}
							onClick={() => setCurrentIndex(index)}
						>
							{item.label}
						</button>
					);
				})}
			</div>
			<div className="tabs_content">{tabsData[currentIndex].content}</div>
		</div>
	);
}

export default Tabs;
