import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BubbleSortPage from "./pages/sorting/BubbleSort";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/sorting/bubble" replace />} />

        {/* Sorting visualizers */}
        <Route path="/sorting/bubble" element={<BubbleSortPage />} />

        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
