import React, { useRef, useState } from "react";

function DragAndDrop({ initialData }: { initialData: any }) {
	const [data, setData] = useState<any>(initialData);

	const dragItem = useRef();
	const dragContainer = useRef();

	const handleDragStart = (e: any, item: any, container: any) => {
		dragItem.current = item;
		dragContainer.current = container;

		e.target.style.opacity = "0.5";
	};

	const handleDragEnd = (e: any) => {
		e.target.style.opacity = "1";
	};

	const handleDrop = (e: any, tragetContainer: any) => {
		const item = dragItem.current;
		const sourceContainer: any = dragContainer.current;
		setData((prev: any) => {
			const newData = { ...prev };
			newData[sourceContainer] = newData[sourceContainer].filter(
				(i: any) => i !== item,
			);
			newData[tragetContainer] = [...newData[tragetContainer], item];
			return newData;
		});
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			{Object.keys(data).map((container, index) => {
				return (
					<div
						onDrop={(e) => handleDrop(e, container)}
						onDragOver={handleDragOver}
						key={index}
						style={{
							padding: "1rem",
							width: "300px",
							minHeight: "300",
							background: "#f0f0f0",
						}}
					>
						<h2>{container}</h2>
						{data[container].map((item: any, idx: number) => {
							return (
								<div
									onDragStart={(e) => handleDragStart(e, item, container)}
									onDragEnd={handleDragEnd}
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										userSelect: "none",
										padding: "16",
										margin: "0 0 8px 0",
										backgroundColor: "white",
										cursor: "move",
										height: "50px",
									}}
									draggable
									key={idx}
								>
									{item}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default DragAndDrop;
