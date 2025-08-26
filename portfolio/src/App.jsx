import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import CodingProfiles from './pages/CodingProfiles';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Add this main container div */}
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <main> {/* Optional: Wrap routes in a <main> tag for semantics */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/profiles" element={<CodingProfiles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
