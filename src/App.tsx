import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Dashboard </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
