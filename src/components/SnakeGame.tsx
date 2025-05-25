import React, { useEffect, useRef, useState } from "react";

const GRID_SIZE = 15;
const INITIAL_SNAKE = [[5, 5]];

function SnakeGame() {
	const generateFood = (): [number, number] => {
		let newFood: [number, number];
		do {
			newFood = [
				Math.floor(Math.random() * GRID_SIZE),
				Math.floor(Math.random() * GRID_SIZE),
			];
		} while (snakeBody.some(([x, y]) => x === newFood[0] && y === newFood[1]));
		return newFood;
	};

	const [snakeBody, setSnakeBody] = useState(INITIAL_SNAKE);
	const GAMEGRID = Array.from({ length: GRID_SIZE }, () =>
		new Array(GRID_SIZE).fill(""),
	);
	const isSnakeDiv = (xy: any, yc: any) => {
		return snakeBody.some(([x, y]) => {
			return x === xy && y === yc;
		});
	};

	const directionRef = useRef<[number, number]>([1, 0]);
	const foodRef = useRef(generateFood());
	const containerRef = useRef<HTMLDivElement>(null);

	const handleDirection = (e: any) => {
		const key = e.key;
		if (key === "ArrowUp" && directionRef.current[1] !== 1) {
			directionRef.current = [0, -1];
		} else if (key === "ArrowLeft" && directionRef.current[0] !== 1) {
			directionRef.current = [-1, 0];
		} else if (key === "ArrowRight" && directionRef.current[0] !== -1) {
			directionRef.current = [1, 0];
		} else if (key === "ArrowDown" && directionRef.current[1] !== -1) {
			directionRef.current = [0, 1];
		}
	};

	useEffect(() => {
		window.focus();
		const interval = setInterval(() => {
			setSnakeBody((prevSnakeBody) => {
				const newHead = [
					prevSnakeBody[0][0] + directionRef.current[0],
					prevSnakeBody[0][1] + directionRef.current[1],
				];

				if (
					newHead[0] < 0 ||
					newHead[0] >= GRID_SIZE ||
					newHead[1] < 0 ||
					newHead[1] >= GRID_SIZE ||
					prevSnakeBody.some(([x, y]) => {
						return newHead[0] === x && newHead[1] === y;
					})
				) {
					directionRef.current = [1, 0];
					return INITIAL_SNAKE;
				}
				const isSamePosition = (a: number[], b: number[]) =>
					a[0] === b[0] && a[1] === b[1];

				const copySnakebody = prevSnakeBody.map((arr) => [...arr]);
				copySnakebody.unshift(newHead);

				const ateFood = isSamePosition(newHead, foodRef.current);

				if (ateFood) {
					foodRef.current = generateFood();
				} else {
					copySnakebody.pop();
				}
				return copySnakebody;
			});
		}, 300);

		window.addEventListener("keydown", handleDirection);
		return () => {
			clearInterval(interval);
			window.removeEventListener("keydown", handleDirection);
		};
	}, []);

	return (
		<>
			<div className="snake-container" ref={containerRef}>
				{GAMEGRID.map((row, yc, index) => {
					return row.map((cell, xc) => {
						return (
							<div
								className={`cell ${isSnakeDiv(xc, yc) ? "snake" : ""} ${
									foodRef.current[0] === xc && foodRef.current[1] === yc
										? "food"
										: ""
								}`}
							></div>
						);
					});
				})}
			</div>
		</>
	);
}

export default SnakeGame;
