
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Models from './Pages/Models';

import Navbar from './component/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    
      <Router>
          <Navbar />
        <Routes>
        <Route index path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        
       <Route path="/models" element={<Models />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
