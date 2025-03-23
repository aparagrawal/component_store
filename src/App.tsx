import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AccordianPage from "./components/AccordianPage";
import OtpField from "./components/OtpField";
import FileExplorer from "./components/FileExplorer";
import PageNavigation from "./components/pageNavigation";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="accordian" element={<AccordianPage/>}/>
      <Route path="otp-field" element={<OtpField/>}/>
      <Route path="file-explorer" element={<FileExplorer/>}/>
      <Route path="page-navigation" element={<PageNavigation/>}/>
    </Routes>
   </Router>
  )

  
}
export default App


