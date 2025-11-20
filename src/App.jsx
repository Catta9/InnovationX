import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CursorTrail from './components/CursorTrail';
import usePageTitle from './hooks/usePageTitle';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.css';

function AppContent() {
  usePageTitle();

  return (
    <div className="app">
      <CursorTrail />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Services />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
