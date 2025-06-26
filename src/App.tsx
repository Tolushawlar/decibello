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
import DigitalMarketingPage from './pages/capabilities/DigitalMarketingPage';
import BrandStrategyPage from './pages/capabilities/BrandStrategyPage';
import MarketResearchPage from './pages/capabilities/MarketResearchPage';
import BlogPage from './pages/blog/BlogPage';
import InsightsPage from './pages/insights/InsightsPage';
import CaseStudiesPage from './pages/insights/CaseStudiesPage';

// Dashboard imports
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import UsersPage from './pages/dashboard/admin/UsersPage';
import StaffDashboard from './pages/dashboard/staff/StaffDashboard';
import UserDashboard from './pages/dashboard/user/UserDashboard';
import ApplicationsPage from './pages/dashboard/user/ApplicationsPage';
import MessagesPage from './components/dashboard/MessagesPage';
import ProfilePage from './components/dashboard/ProfilePage';

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
        <Route path="/capabilities/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/capabilities/brand-strategy" element={<BrandStrategyPage />} />
        <Route path="/capabilities/market-research" element={<MarketResearchPage />} />
        <Route path="/capabilities/:capability" element={<CapabilitiesPage />} />
        
        {/* User Registration Routes */}
        <Route path="/user-registration/register" element={<RegisterPage />} />
        
        {/* Insights Routes */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:category" element={<BlogPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/admin/users" element={<UsersPage />} />
        <Route path="/dashboard/admin/jobs" element={<JobsPage />} />
        <Route path="/dashboard/admin/messages" element={<MessagesPage role="admin" />} />
        <Route path="/dashboard/admin/profile" element={<ProfilePage role="admin" />} />
        
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
        <Route path="/dashboard/staff/messages" element={<MessagesPage role="staff" />} />
        <Route path="/dashboard/staff/profile" element={<ProfilePage role="staff" />} />
        
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/user/applications" element={<ApplicationsPage />} />
        <Route path="/dashboard/user/messages" element={<MessagesPage role="user" />} />
        <Route path="/dashboard/user/profile" element={<ProfilePage role="user" />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;