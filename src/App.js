import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyPage from './CompanyPage';
import NavigationBar from './NavigationBar'; // Import the navigation component
import TeamPage from './TeamPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import Footer from './Footer';

function App() {
  return (
    <><Router>
      <NavigationBar /> {/* This includes the navigation bar across all components */}
      <Routes>
        <Route path="/" element={<CompanyPage />} />
        <Route path="/cropminddev" element={<CompanyPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router></>
  );
}

export default App;
