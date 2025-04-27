import React, { useState } from "react";

function VirtualizedList({
	List,
	height,
	width,
	innerHeight,
}: {
	List: any;
	height: number;
	width: number;
	innerHeight: number;
}) {
	const [indices, setIndices] = useState([0, Math.floor(height / innerHeight)]);

	const visibleList = List.slice(indices[0], indices[1] + 1);

	const handleScroll = (e: any) => {
		const { scrollTop } = e.target;

		const newStartIndex = Math.floor(scrollTop / innerHeight);

		const newEndIndex = newStartIndex + Math.floor(height / innerHeight);

		setIndices([newStartIndex, newEndIndex]);
	};

	return (
		<div
			onScroll={handleScroll}
			style={{ height, width, backgroundColor: "grey", overflow: "auto" }}
		>
			<div style={{ height: List.length * innerHeight, position: "relative" }}>
				{visibleList.map((item: any, index: number) => {
					return (
						<div
							style={{
								height: innerHeight,
								background: "coral",
								borderTop: "3px solid grey",
								position: "absolute",
								top: (indices[0] + index) * innerHeight,
								width: "100%",
								textAlign: "center",
							}}
						>
							{"item" + item}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VirtualizedList;
