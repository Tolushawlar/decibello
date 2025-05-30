import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import CareersPage from './pages/careers/CareersPage';
import JobsPage from './pages/careers/JobsPage';
import JobDetailPage from './pages/careers/JobDetailPage';
import EarlyCareersPage from './pages/careers/EarlyCareersPage';
import ExperiencedPage from './pages/careers/ExperiencedPage';
import IndustriesPage from './pages/industries/IndustriesPage';
import FinancialServicesPage from './pages/industries/FinancialServicesPage';
import HealthcarePage from './pages/industries/HealthcarePage';
import BlogPage from './pages/blog/BlogPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Careers Routes */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/jobs" element={<JobsPage />} />
        <Route path="/careers/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/careers/early-careers" element={<EarlyCareersPage />} />
        <Route path="/careers/experienced" element={<ExperiencedPage />} />
        
        {/* Industries Routes */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<BlogPage />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;