import React from "react";
import "../App.css";

interface PaginationProps {
	pageNo: number;
	setPageNo: (page: number) => void;
}

function Pagination({ pageNo, setPageNo }: PaginationProps) {
	const prevArray = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index)
		.filter((value: number) => value > 0)
		.reverse();
	const nextArray = Array.from({ length: 4 }, (_, index) => pageNo + index);

	const paginationArray = [...prevArray, ...nextArray];

	return (
		<div className="pagination-container">
			{pageNo > 1 && (
				<div className="page-btn" onClick={() => setPageNo(pageNo - 1)}>
					{"<"}
				</div>
			)}
			{paginationArray.map((item: number) => {
				return (
					<div
						className={item === pageNo ? "page-btn active" : "page-btn"}
						onClick={() => setPageNo(item)}
					>
						{item}
					</div>
				);
			})}
			<div className="page-btn" onClick={() => setPageNo(pageNo + 1)}>
				{">"}
			</div>
		</div>
	);
}

export default Pagination;
