import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import CareersPage from './pages/careers/CareersPage';
import BlogPage from './pages/blog/BlogPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;