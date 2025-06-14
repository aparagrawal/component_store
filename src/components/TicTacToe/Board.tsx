import React from "react";
import "./tictac.css";

function Board({
	size,
	board,
	handleClickedCell,
}: {
	size: number;
	board: any;
	handleClickedCell: any;
}) {
	return (
		<div
			className="board"
			style={{ gridTemplateColumns: `repeat(${size},50px)` }}
		>
			{board.map((row: any, rowNo: number) => {
				return row.map((cell: any, cellNo: number) => {
					return (
						<div
							onClick={() => handleClickedCell(rowNo, cellNo)}
							className="cell"
						>
							{cell}
						</div>
					);
				});
			})}
		</div>
	);
}

export default Board;
