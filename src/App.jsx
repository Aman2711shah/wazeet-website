import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import AITools from './pages/AITools';
import Freezones from './pages/Freezones';
import Investment from './pages/Investment';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
          <Route path="ai-tools" element={<AITools />} />
          <Route path="freezones" element={<Freezones />} />
          <Route path="investment" element={<Investment />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:id" element={<BlogPost />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
