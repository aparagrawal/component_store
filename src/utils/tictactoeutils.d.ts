type CheckWinnerParams = {
	board: (string | null)[][];
	size: number;
};

export function checkWinner(params: CheckWinnerParams): string | null;
