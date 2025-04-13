import React from "react";

function ScrolImages(data: any) {
	return (
		<div>
			{data.map((item: any, index: number) => {
				return <img className="img" src={data.download_url} />;
			})}
		</div>
	);
}

export default ScrolImages;
