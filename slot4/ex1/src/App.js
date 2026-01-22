// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Booking from "./components/Booking";   // assuming you have this
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      
      {/* Hero shows on EVERY page now */}
      <Hero />

      <Routes>
        {/* Home: additional content below Hero */}
        <Route path="/" element={<><Menu /><Booking /></>} />

        {/* About Us: only AboutUs content below Hero */}
        <Route path="/about" element={<AboutUs />} />

        {/* Contact: only Contact content below Hero */}
        <Route path="/contact" element={<Contact />} />

        {/* Optional: 404 page */}
        {/* <Route path="*" element={<h1 className="text-center py-5">404 - Page Not Found</h1>} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;