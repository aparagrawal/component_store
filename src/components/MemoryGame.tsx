import React, { useEffect, useState } from "react";

function MemoryGame() {
	const [isLock, setIsLock] = useState(false);
	const [flipedCard, setFlipedCard] = useState<number[]>([]);

	const handleClick = (index: number) => {
		if (cards[index].isFliped || isLock) {
			return;
		}
		const copyCards = [...cards];
		copyCards[index].isFliped = true;
		setCards(copyCards);
		setFlipedCard([...flipedCard, index]);
	};
	useEffect(() => {
		if (flipedCard.length === 2) {
			setIsLock(true);
			setTimeout(() => {
				if (cards[flipedCard[0]].number !== cards[flipedCard[1]].number) {
					setCards((prevCards) => {
						const copyCards = [...prevCards];
						copyCards[flipedCard[0]].isFliped = false;
						copyCards[flipedCard[1]].isFliped = false;
						return copyCards;
					});
				}
				setIsLock(false);
				setFlipedCard([]);
			}, 3000);
		}
	}, [flipedCard]);
	const generateGrid = () => {
		const arr = Array.from(
			{ length: 18 },
			(_: any, index: number) => index + 1,
		);

		const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
		const cards = grid.map((item, index) => {
			return { id: index, number: item, isFliped: false };
		});

		return cards;
	};
	const [cards, setCards] = useState(generateGrid());

	return (
		<div className="main-game-container">
			<h2>Memory Game</h2>

			<div className="game-grid">
				{cards.map(({ id, number, isFliped }) => {
					return (
						<button className="cards" onClick={() => handleClick(id)}>
							{" "}
							{isFliped ? number : "?"}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default MemoryGame;
