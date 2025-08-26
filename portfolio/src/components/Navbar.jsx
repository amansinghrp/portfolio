import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#0EA5E9]">Aman Singh</div>
        <div className="space-x-4">
          <NavLink to="/" className="hover:text-[#0EA5E9]">Home</NavLink>
          <NavLink to="/skills" className="hover:text-[#0EA5E9]">Skills</NavLink>
          <NavLink to="/projects" className="hover:text-[#0EA5E9]">Projects</NavLink>
          <NavLink to="/experience" className="hover:text-[#0EA5E9]">Experience</NavLink>
          <NavLink to="/profiles" className="hover:text-[#0EA5E9]">Profiles</NavLink>
          <NavLink to="/contact" className="hover:text-[#0EA5E9]">Contact</NavLink>
          <a href="/resume.pdf" target="_blank" className="bg-[#0EA5E9] text-white px-3 py-1 rounded hover:shadow-lg">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
