import "../assets/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPost from "./ListPost";

function App() {
 return (
  <div className="App">
   <Router>
    <Routes>
     <Route exact path="/" element={<ListPost />} />
    </Routes>
   </Router>
  </div>
 );
}

export default App;
