import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './home';
import SearchPage from './search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SearchPage/>
);

