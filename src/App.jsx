import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Clients from "./components/Clients";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Community from "./components/Community";
import Pricing from "./components/Pricing";
import Login from "./components/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Clients />
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Footer/>
          </>
        } />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} /> 
        <Route path="/pricing" element={<Pricing />} /> 

      </Routes>
    </Router>
  );
}

export default App;
