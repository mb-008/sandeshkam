import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Home from "./pages/home";
import AboutUsPage from "./pages/aboutus";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/about_us" element={<AboutUsPage />} />

          {/* You can add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
