import "./App.css";
import HomePage from "./screens/HomePage/HomePage";
import SearchResultPage from "./screens/SearchResultPage/SearchResultPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelDetailsPage from "./screens/HotelDetailsPage/HotelDetailsPage";
import Login from "./screens/LoginPage/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/hotels" element={<SearchResultPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
