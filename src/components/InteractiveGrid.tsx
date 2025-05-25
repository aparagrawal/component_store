import React, { useEffect } from "react";
import { useState, useRef } from "react";

function InteractiveGrid() {
	const [grid, setGrid] = useState(
		Array.from({ length: 3 }, () => new Array(3).fill(false)),
	);
	const queue = useRef<[number, number][]>([]);
	const timerId = useRef<number[]>([]);

	const handleClick = (rowIndex: number, cellIndex: number, flag: boolean) => {
		if (timerId.current.length > 0 && flag) {
			return;
		}
		if (grid[rowIndex][cellIndex] && flag) {
			return;
		}
		setGrid((prevGrid: any) => {
			const gridDeepCopy = prevGrid.map((row: any) => [...row]);
			gridDeepCopy[rowIndex][cellIndex] = flag;
			if (flag) {
				queue.current.push([rowIndex, cellIndex]);
				return gridDeepCopy;
			}
		});
	};
	useEffect(() => {
		if (queue.current.length === 9) {
			queue.current.forEach(([rowIndex, cellIndex], index) => {
				timerId.current[index] = setTimeout(() => {
					handleClick(rowIndex, cellIndex, false);
					if (index === timerId.current.length - 1) timerId.current = [];
				}, 1000 * (index + 1));
			});
		}
		queue.current = [];
	}, [grid]);

	useEffect(() => {
		return () => {
			timerId.current.forEach((id) => clearTimeout(id));
		};
	});
	return (
		<div className="grid-container">
			{grid.map((row, rowIndex) => {
				return row.map((cell, cellIndex) => {
					return (
						<div
							className={`cell ${cell ? "active" : ""}`}
							key={`${rowIndex}-${cellIndex}`}
							onClick={() => handleClick(rowIndex, cellIndex, true)}
						></div>
					);
				});
			})}
		</div>
	);
}

export default InteractiveGrid;
