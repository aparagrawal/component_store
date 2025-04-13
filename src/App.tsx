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

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="accordian" element={<AccordianPage />} />
				<Route path="otp-field" element={<OtpField />} />
				<Route path="file-explorer" element={<FileExplorer />} />
				<Route path="page-navigation" element={<PageNavigation />} />
				<Route path="react-tabs" element={<Tabs tabsData={tabsData} />} />
				<Route path="interactive-grid" element={<InteractiveGrid />} />
				<Route path="infinite-scroll" element={<InfiniteScroll />} />
			</Routes>
		</Router>
	);
}
export default App;
