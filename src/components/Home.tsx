import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
	const navigate = useNavigate();
	return (
		<div className="main-component">
			<h2>Choose components</h2>
			<div
				style={{
					height: "300px",
					width: "500px",
					border: "2px solid black",
					borderRadius: "10px",
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "10px",
						padding: "10px",
					}}
				>
					<button onClick={() => navigate("accordian")} className="btn-class">
						Accordian
					</button>
					<button
						onClick={() => navigate("file-explorer")}
						className="btn-class"
					>
						File Manager
					</button>
					<button onClick={() => navigate("otp-field")} className="btn-class">
						Otp field
					</button>
					<button
						onClick={() => navigate("page-navigation")}
						className="btn-class"
					>
						Pagination
					</button>
					<button onClick={() => navigate("react-tabs")} className="btn-class">
						Tabs
					</button>
					<button
						onClick={() => navigate("/interactive-grid")}
						className="btn-class"
					>
						Interactive grid
					</button>
					<button
						onClick={() => navigate("/infinite-scroll")}
						className="btn-class"
					>
						Infinite Scroll
					</button>
					<button
						onClick={() => navigate("/type-effect")}
						className="btn-class"
					>
						Type effect
					</button>
					<button
						onClick={() => navigate("/progress-bar")}
						className="btn-class"
					>
						Progress Bar
					</button>
					<button
						onClick={() => navigate("/traffic-lights")}
						className="btn-class"
					>
						Traffic Lights
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
