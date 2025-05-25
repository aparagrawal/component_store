import { Children, useEffect, useRef, useState } from "react";
import data from "../FileData.json";
import "../App.css";
function FileExplorer() {
	const orderFood = new Promise((resolve, reject) => {
		setTimeout(() => {
			let foodAvailable = true;
			if (foodAvailable) {
				resolve("food delivered");
			} else {
				reject("food is not delivered");
			}
		}, 2000);
	});
	orderFood.then((message) => {
		console.log("success", message);
	});

	return (
		// <Route>
		//   <Routes>
		//     <Route path=""
		//   </Routes>
		// </Route>
		<div className="container-file">
			<h5>
				{data.type === "folder" ? "📁" : "🗂️"}
				{data.name}
			</h5>
			{data?.children?.map((item: any, index: number) => {
				return <div>{item.name}</div>;
			})}
		</div>
	);
}

export default FileExplorer;
