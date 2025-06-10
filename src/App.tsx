import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/user-registration/RegisterPage';
import AboutPage from './pages/about/AboutPage';
import LeadershipPage from './pages/about/LeadershipPage';
import ContactPage from './pages/about/ContactPage';
import CareersPage from './pages/careers/CareersPage';
import JobsPage from './pages/careers/JobsPage';
import JobDetailPage from './pages/careers/JobDetailPage';
import EarlyCareersPage from './pages/careers/EarlyCareersPage';
import ExperiencedPage from './pages/careers/ExperiencedPage';
import IndustriesPage from './pages/industries/IndustriesPage';
import FinancialServicesPage from './pages/industries/FinancialServicesPage';
import HealthcarePage from './pages/industries/HealthcarePage';
import RetailPage from './pages/industries/RetailPage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import CapabilitiesPage from './pages/capabilities/CapabilitiesPage';
import DigitalTransformationPage from './pages/capabilities/DigitalTransformationPage';
import CloudServicesPage from './pages/capabilities/CloudServicesPage';
import DataAnalyticsPage from './pages/capabilities/DataAnalyticsPage';
import BlogPage from './pages/blog/BlogPage';
import InsightsPage from './pages/insights/InsightsPage';
import CaseStudiesPage from './pages/insights/CaseStudiesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* About Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/about/:subpage" element={<AboutPage />} />
        
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
        <Route path="/industries/retail" element={<RetailPage />} />
        <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
        <Route path="/industries/:industry" element={<IndustriesPage />} />
        
        {/* Capabilities Routes */}
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/capabilities/digital-transformation" element={<DigitalTransformationPage />} />
        <Route path="/capabilities/cloud-services" element={<CloudServicesPage />} />
        <Route path="/capabilities/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/capabilities/:capability" element={<CapabilitiesPage />} />
        
        {/* User Registration Routes */}
        <Route path="/user-registration/register" element={<RegisterPage />} />
        
        {/* Insights Routes */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:category" element={<BlogPage />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;