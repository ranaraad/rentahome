import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import HomePage from "./home";
import SearchPage from "./search";
import PostListingForm from "./form";
import AboutContact from "./contact";
import "./index.css";

const App = () => {
  return (
    <Router basename="/rentahome">
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/post-listing" element={<PostListingForm />} />
          <Route path="/about-contact" element={<AboutContact />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
