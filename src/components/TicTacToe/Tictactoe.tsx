import React, { useState } from "react";
import "./tictac.css";
import Board from "./Board";
import { checkWinner } from "../../utils/tictactoeutils.js";

function TicTacToe({ size = 4 }) {
	const [board, setBoard] = useState(
		Array.from({ length: size }, () => {
			return Array(size).fill(null);
		}),
	);
	const [turnX, setTurnX] = useState(false);

	const winner = checkWinner({ board, size });

	const status = winner
		? `winner is ${winner}`
		: turnX
		? "player O turn"
		: "player X turn";

	const handleClickedCell = (rowIndx: number, colIndx: number) => {
		if (board[rowIndx][colIndx] || winner) {
			return;
		}
		const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
		deepCopyOfBoard[rowIndx][colIndx] = turnX ? "O" : "X";
		setBoard(deepCopyOfBoard);
		setTurnX(!turnX);
	};

	const handleReset = () => [
		setBoard(
			Array.from({ length: size }, () => {
				return Array(size).fill(null);
			}),
		),
	];

	return (
		<div className="container">
			<Board handleClickedCell={handleClickedCell} board={board} size={size} />
			<div className="status">{status}</div>
			<button onClick={handleReset}>reset</button>
		</div>
	);
}

export default TicTacToe;
