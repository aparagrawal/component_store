import React, { useEffect, useState } from "react";
import ScrolImages from "./ScrolImages";

function InfiniteScroll() {
	const [data, setData] = useState<any>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		console.log("useEffect running...");
		const fetchData = async () => {
			try {
				const res = await fetch(
					`https://picsum.photos/v2/list?page=${page}&limit=3`,
				);
				const arr = await res.json();
				setData((oldArray: any) => [...oldArray, ...arr]);
			} catch (error) {
				console.error("Fetch error:", error);
			}
		};
		fetchData();
	}, [page]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(params) => {
				if (params[0].isIntersecting) {
					observer.unobserve(lastImage);

					setPage((page) => page + 1);
				}
			},
			{ threshold: 0.5 },
		);
		const lastImage: any = document.querySelector(".img:last-child");
		if (!lastImage) {
			return;
		}
		observer.observe(lastImage);
		return () => {
			if (lastImage) {
				observer.observe(lastImage);
			}
			observer.disconnect();
		};
	}, [data]);

	return (
		<div className="image-container">
			{data.map((item: any, index: number) => {
				return <img className="img" src={item.download_url} />;
			})}
		</div>
	);
}

export default InfiniteScroll;
