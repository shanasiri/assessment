import Home from "./components/home/Home";
import Create from "./components/create/Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Edit from "./components/edit/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
