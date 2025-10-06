import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 shadow-lg py-2" 
          : "bg-transparent py-4"
      } backdrop-blur-sm mt-4`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between bg-white/50 rounded-full px-6 py-2 backdrop-blur-sm">
          <Link to="/" className="text-xl font-bold text-gray-800">TB</Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/about" current={location.pathname}>About</NavLink>
            <NavLink to="/education" current={location.pathname}>Education</NavLink>
            <NavLink to="/skills" current={location.pathname}>Skills</NavLink>
            <NavLink to="/projects" current={location.pathname}>Projects</NavLink>
            <NavLink to="/contact" current={location.pathname}>Contact</NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: string }) => (
  <Link
    to={to}
    className={`text-gray-800 hover:text-gray-600 transition-colors ${
      current === to ? "font-semibold" : ""
    }`}
  >
    {children}
  </Link>
);

export default Navbar;