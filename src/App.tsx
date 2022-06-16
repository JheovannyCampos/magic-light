import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashboardCard from "./Pages/Dashboard";
function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Dashboard </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<DashboardCard />} />
      </Routes>
    </Router>
  );
}

export default App;
