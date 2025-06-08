import React, { useEffect, useRef, useState } from "react";

const STATE = {
	LOADING: "LOADING",
	SUCCESS: "SUCCESS",
	ERROR: "ERROR",
};

function SearchBar() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);
	const [state, setState] = useState(STATE.LOADING);
	const cache: any = useRef({});
	useEffect(() => {
		const abortController = new AbortController();
		const { signal } = abortController;
		const fetchData = async () => {
			try {
				setState(STATE.LOADING);
				if (cache.current[query]) {
					setData(cache.current[query]);
					setState(STATE.SUCCESS);
					return;
				}
				const res = await fetch(
					`https://dummyjson.com/products/search?q=${query}&limit=10`,
					{ signal },
				);

				const data = await res.json();

				setData(data.products);
				cache.current[query] = data.products;
				setState(STATE.SUCCESS);
			} catch (error: any) {
				if (error.name !== "AbortError") {
					setState(STATE.ERROR);
				}
			}
		};
		const timerId = setTimeout(fetchData, 1000);
		return () => {
			clearTimeout(timerId);
			abortController.abort();
		};
	}, [query]);
	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{state === STATE.LOADING && <p>Loading...</p>}
			{state === STATE.ERROR && <p>Error Occured</p>}
			{state === STATE.SUCCESS && (
				<ul>
					{data.map((item: any) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default SearchBar;
