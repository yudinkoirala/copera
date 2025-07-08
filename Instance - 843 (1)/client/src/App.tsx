import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from '@/contexts/AdminContext';
import HomePage from './pages/HomePage';
import CalculatorsPage from './pages/CalculatorsPage';
import ShopPage from './pages/ShopPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactSupportPage from './pages/ContactSupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AdminPage from './pages/AdminPage';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/support" element={<ContactSupportPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;
