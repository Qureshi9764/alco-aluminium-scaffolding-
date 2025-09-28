import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProjectGallery from './pages/ProjectGallery';
import SafetyStandards from './pages/SafetyStandards';
import Branches from './pages/Branches';

// Error Boundary
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen flex flex-col bg-white">
            <ScrollToTop />
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/projects" element={<ProjectGallery />} />
                <Route path="/safety" element={<SafetyStandards />} />
                <Route path="/branches" element={<Branches />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                    <a href="/" className="btn-primary">Return Home</a>
                  </div>
                </div>} />
              </Routes>
            </main>
            
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;