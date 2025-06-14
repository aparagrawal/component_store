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
					height: "500px",
					width: "600px",
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
					<button onClick={() => navigate("/modal")} className="btn-class">
						Modal
					</button>
					<button
						onClick={() => navigate("/memory-game")}
						className="btn-class"
					>
						Memory Game
					</button>
					<button onClick={() => navigate("/drag-drop")} className="btn-class">
						Drag and Drop
					</button>
					<button
						onClick={() => navigate("/virtialized-list")}
						className="btn-class"
					>
						Virtualized List
					</button>
					<button
						onClick={() => navigate("/stepper-component")}
						className="btn-class"
					>
						Stepper component
					</button>
					<button onClick={() => navigate("/todo-list")} className="btn-class">
						Todo List
					</button>
					<button
						onClick={() => navigate("/crypto-converter")}
						className="btn-class"
					>
						Crypto Converter
					</button>
					<button onClick={() => navigate("/snake-game")} className="btn-class">
						Snake Game
					</button>
					<button onClick={() => navigate("/count-down")} className="btn-class">
						Stop Watch
					</button>
					<button onClick={() => navigate("/carousel")} className="btn-class">
						Carousel
					</button>
					<button onClick={() => navigate("/search-bar")} className="btn-class">
						Search bar
					</button>
					<button
						onClick={() => navigate("/nested-component")}
						className="btn-class"
					>
						Nested Component
					</button>
					<button
						onClick={() => navigate("/tic-tac-toe")}
						className="btn-class"
					>
						Tic Tac Toe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
