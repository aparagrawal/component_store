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
import { Children, useState } from "react";
import VirtualizedList from "./components/VirtualizedList";
import Stepper from "./components/Stepper";
import TodoList from "./components/TodoList";
import CryptoConverter from "./components/CryptoConverter";
import SnakeGame from "./components/SnakeGame";
import CountDownTimer from "./components/CountDownTimer";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import CommentBox from "./components/NestedComponent/CommentBox";
import commentsData from "./NestedData.json";
import TicTacToe from "./components/TicTacToe/Tictactoe";
import FAQ from "./components/FAQComponent/FAQ";
import data from "./components/FAQComponent/faqData.json";
type Comment = {
	id: number;
	value: string;
	parentId: number | null;
	children: number[];
};

type Comments = {
	[key: number]: Comment;
};

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
	const [comments, setComments] = useState<Comments>(commentsData.comments);

	const addComment = (value: string, parentId: number) => {
		const newId = Date.now();
		const newComment: Comment = { id: newId, value, parentId, children: [] };
		setComments((prevComment) => {
			const updatedComment = { ...prevComment, [newId]: newComment };
			updatedComment[parentId].children.push(newId);
			return updatedComment;
		});
	};

	const deleteComment = (id: number) => {
		const parentId = comments[id].parentId;
		if (parentId === null) return;

		setComments((prevComments) => {
			const updatedComments = { ...prevComments };
			updatedComments[parentId].children = updatedComments[
				parentId
			].children.filter((childId) => childId !== id);

			const queue = [id];
			while (queue.length > 0) {
				const nodeToDelete = queue.shift();
				if (nodeToDelete === undefined) continue;

				queue.push(...updatedComments[nodeToDelete].children);
				delete updatedComments[nodeToDelete];
			}
			return updatedComments;
		});
	};

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
				<Route path="snake-game" element={<SnakeGame />} />
				<Route path="count-down" element={<CountDownTimer />} />
				<Route path="/" element={<Home />} />
				<Route path="crypto-converter" element={<CryptoConverter />} />
				<Route path="carousel" element={<Carousel />} />
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
				<Route path="search-bar" element={<SearchBar />} />
				<Route path="tic-tac-toe" element={<TicTacToe />} />
				<Route path="faq-component" element={<FAQ data={data} />} />
				<Route
					path="nested-component"
					element={
						<CommentBox
							comment={comments[1]}
							allComments={comments}
							addComment={addComment}
							deleteComment={deleteComment}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}
export default App;
