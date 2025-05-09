import React, { useEffect, useState } from "react";

function CryptoConverter() {
	const currencyOptios = ["USD", "EUR", "GBP", "CNY"];

	const crypto_api = "https://api.frontendeval.com/fake/crypto";

	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConVertedAmount] = useState(0);
	const [conversionRate, setConversionRate] = useState(0);
	const [currency, setCurrency] = useState(currencyOptios[0]);
	const [prevConvertedAmount, setPrevConvertedAmount] = useState(0);

	useEffect(() => {
		const fetchConversion = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
				);

				const data = await response.json();
				const invertedRate = 1 / data.bitcoin?.[currency.toLowerCase()];
				setConversionRate(invertedRate);
			} catch (err) {
				console.log(err);
			}
		};
		fetchConversion();
		const timer = setInterval(fetchConversion, 30000);
		return () => {
			clearInterval(timer);
		};
	}, [currency]);

	useEffect(() => {
		setPrevConvertedAmount(convertedAmount);
		setConVertedAmount(amount * conversionRate);
	}, [conversionRate, amount]);

	const priceChange = convertedAmount - prevConvertedAmount;

	return (
		<div>
			<label htmlFor="amountToConvert">
				Amount to convert:
				<input
					type="number"
					id="amountToconvert"
					value={amount}
					onChange={(e: any) => setAmount(e.target.value)}
				/>
			</label>
			<label htmlFor="currency">
				Select Currency:
				<select id="currency" onChange={(e) => setCurrency(e.target.value)}>
					{currencyOptios.map((item, index) => {
						return (
							<option key={index} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</label>
			<p>WUC Crypto equivalent:{convertedAmount.toFixed(6)}</p>
			<p style={{ color: priceChange > 0 ? "green" : "red" }}>
				Change : {priceChange > 0 ? "⬆️" : "🔻"} {priceChange.toFixed(6)}
			</p>
		</div>
	);
}

export default CryptoConverter;
