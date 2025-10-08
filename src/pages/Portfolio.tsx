import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 shadow-lg" 
          : "bg-transparent"
      } backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.img
              src="/lovable-uploads/7062933d-18ef-4f0f-8302-0dc84afc1935.png"
              alt="Logo"
              className="h-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/hobbies')}
              loading="lazy"
              decoding="async"
            />
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">About</a>
              <a href="#education" className="text-gray-800 hover:text-gray-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-800 hover:text-gray-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-800 hover:text-gray-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Hi, I'm Tuhin Bhattacharya
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-8">
                <TypeAnimation
                  sequence={[
                    "I'm a Data Analyst",
                    1000,
                    "I'm a BI Developer",
                    1000,
                    "I'm a Chemical Engineer",
                    1000,
                    "I'm a Problem Solver",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="flex space-x-6 mb-8">
                <a href="https://www.linkedin.com/in/tuhinbhattacharya28" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
                <a href="https://www.instagram.com/_threads_of_karma_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img
                src="/lovable-uploads/IMG_8915.PNG"
                alt="Profile"
                className="rounded-lg shadow-2xl max-w-md mx-auto object-contain bg-gray-100"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Education & Experience</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline items */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
              
              {/* Education Items */}
              <TimelineItem
                year="2025 - 2027"
                title="PGDM - Big Data Analytics"
                institution="Goa Institute of Management, Goa"
                description="Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development."
                side="left"
              />
              
              <TimelineItem
                year="July 2023 - Dec 2023"
                title="Business Intelligence Intern"
                institution="Celebal Technologies"
                description="Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times."
                side="right"
              />
              
              <TimelineItem
                year="2019 - 2023"
                title="B.E. Chemical Engineering"
                institution="Jadavpur University"
                description="Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC."
                side="left"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, institution, description, side }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex justify-${side === 'left' ? 'start' : 'end'} w-full mb-16`}
    >
      <div className={`w-5/12 ${side === 'right' && 'ml-auto'}`}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <span className="text-yellow-500 font-bold">{year}</span>
          <h3 className="text-xl font-bold mt-2">{title}</h3>
          <p className="text-gray-600 mt-2">{institution}</p>
          <p className="text-gray-500 mt-2 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;