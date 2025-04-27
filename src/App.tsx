import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AccordianPage from "./components/AccordianPage";
import OtpField from "./components/OtpField";
import FileExplorer from "./components/FileExplorer";
import PageNavigation from "./components/pageNavigation";
import Tabs from "./components/Tabs";
import InteractiveGrid from "./components/InteractiveGrid";
import InfiniteScroll from "./components/InfiniteScroll";
import TypeEffect from "./components/TypeEffect";
import ProgressBar from "./components/ProgressBar";
import TrafficLights from "./components/TrafficLights";
import Modal from "./components/Modal";
import MemoryGame from "./components/MemoryGame";
import DragAndDrop from "./components/DragAndDrop";
import { useState } from "react";
import VirtualizedList from "./components/VirtualizedList";
import Stepper from "./components/Stepper";
import TodoList from "./components/TodoList";

function App() {
	const tabsData = [
		{
			label: "Profile",
			content: <div>Profile Info Content</div>,
		},
		{
			label: "Dashboard",
			content: <div>Dashboard Content</div>,
		},
		{
			label: "Settings",
			content: <div>Settings Content</div>,
		},
		{
			label: "Invoice",
			content: <div>Invoice Content</div>,
		},
	];

	const List = Array.from({ length: 10000 }, (_, index) => index + 1);

	const initialData = {
		Todo: [
			"Design UI mockups",
			"Set up project repository",
			"Write unit test",
			"Integrate payment gateway",
		],
		"In Progress": ["Develop authentication flow", "Implement routing"],
		Completed: [
			"Set up CI/CD pipeline",
			"Conduct code reviews",
			"Deploy initial version to staging",
		],
	};

	const steps = [
		{
			label: "Personal Info",
			content: (
				<div className="step-component">Personal Information Content</div>
			),
		},
		{
			label: "Account Info",
			content: <div className="step-component">Account Info Content</div>,
		},
		{
			label: "Payment",
			content: <div className="step-component">Payment Content</div>,
		},
		{
			label: "Confirmation",
			content: <div className="step-component">Confirmation Content</div>,
		},
		{
			label: "Review",
			content: <div className="step-component"> Review Content</div>,
		},
	];

	const [showModal, setShowModal] = useState(true);

	return (
		<Router basename="component_store">
			<Routes>
				<Route path="accordian" element={<AccordianPage />} />
				<Route path="otp-field" element={<OtpField />} />
				<Route path="file-explorer" element={<FileExplorer />} />
				<Route path="page-navigation" element={<PageNavigation />} />
				<Route path="react-tabs" element={<Tabs tabsData={tabsData} />} />
				<Route path="interactive-grid" element={<InteractiveGrid />} />
				<Route path="infinite-scroll" element={<InfiniteScroll />} />
				<Route
					path="type-effect"
					element={<TypeEffect text="I am frontend developer" delay="100" />}
				/>
				<Route path="progress-bar" element={<ProgressBar />} />
				<Route path="traffic-lights" element={<TrafficLights />} />
				<Route path="memory-game" element={<MemoryGame />} />
				<Route
					path="drag-drop"
					element={<DragAndDrop initialData={initialData} />}
				/>
				<Route path="stepper-component" element={<Stepper steps={steps} />} />
				<Route
					path="modal"
					element={
						<Modal isOpen={showModal} closeModal={() => setShowModal(false)} />
					}
				/>
				<Route path="/" element={<Home />} />
				<Route
					path="virtialized-list"
					element={
						<VirtualizedList
							List={List}
							height={400}
							width={300}
							innerHeight={35}
						/>
					}
				/>
				<Route path="todo-list" element={<TodoList />} />
			</Routes>
		</Router>
	);
}
export default App;
