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
import ProjectDetails from './pages/ProjectDetails';
import SafetyStandards from './pages/SafetyStandards';
import Branches from './pages/Branches';

// Product Pages
import StandardScaffolding from './pages/products/StandardScaffolding';
import MobileTowers from './pages/products/MobileTowers';
import SuspendedPlatforms from './pages/products/SuspendedPlatforms';
import TemporaryRoofing from './pages/products/TemporaryRoofing';

// Service Detail Pages
import MsScaffoldingRent from './pages/services/MsScaffoldingRent';
import MsScaffoldingSale from './pages/services/MsScaffoldingSale';
import InstallationSetup from './pages/services/InstallationSetup';
import Maintenance from './pages/services/Maintenance';
import SafetyInspections from './pages/services/SafetyInspections';
import Training from './pages/services/Training';
import ScaffoldingDelivery from './pages/services/ScaffoldingDelivery';
import InstallationDisassembly from './pages/services/InstallationDisassembly';
import AluminiumScaffolding from './pages/services/AluminiumScaffolding';
import WarehouseLadder from './pages/services/WarehouseLadder';
import FiberglassLadder from './pages/services/FiberglassLadder';
import ATypeLadder from './pages/services/ATypeLadder';
import LadderManufacturers from './pages/services/LadderManufacturers';

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
                <Route path="/products/standard" element={<StandardScaffolding />} />
                <Route path="/products/mobile-towers" element={<MobileTowers />} />
                <Route path="/products/suspended" element={<SuspendedPlatforms />} />
                <Route path="/products/roofing" element={<TemporaryRoofing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/ms-rent" element={<MsScaffoldingRent />} />
                <Route path="/services/ms-sale" element={<MsScaffoldingSale />} />
                <Route path="/services/installation" element={<InstallationSetup />} />
                <Route path="/services/maintenance" element={<Maintenance />} />
                <Route path="/services/inspections" element={<SafetyInspections />} />
                <Route path="/services/safety-inspections" element={<SafetyInspections />} />
                <Route path="/services/training" element={<Training />} />
                <Route path="/services/scaffolding-delivery" element={<ScaffoldingDelivery />} />
                <Route path="/services/installation-disassembly" element={<InstallationDisassembly />} />
                <Route path="/services/aluminium-scaffolding" element={<AluminiumScaffolding />} />
                <Route path="/services/warehouse-ladder" element={<WarehouseLadder />} />
                <Route path="/services/fiberglass-ladder" element={<FiberglassLadder />} />
                <Route path="/services/a-type-ladder" element={<ATypeLadder />} />
                <Route path="/services/ladder-manufacturers" element={<LadderManufacturers />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/projects" element={<ProjectGallery />} />
                <Route path="/project-details/:id" element={<ProjectDetails />} />
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