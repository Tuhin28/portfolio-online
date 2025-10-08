import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hobbies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.img
              src="/lovable-uploads/7062933d-18ef-4f0f-8302-0dc84afc1935.png"
              alt="Karma Logo"
              className="h-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/portfolio')}
              loading="lazy"
              decoding="async"
            />
            <div className="hidden md:flex space-x-8">
              <a href="#art" className="text-gray-800 hover:text-gray-600 transition-colors">Digital Art</a>
              <a href="#sports" className="text-gray-800 hover:text-gray-600 transition-colors">Sports</a>
              <a href="#blog" className="text-gray-800 hover:text-gray-600 transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 px-6">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            My Creative Journey
          </motion.h1>
          
          {/* Digital Art Section */}
          <section id="art" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Digital Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add your digital art items here */}
            </div>
          </section>

          {/* Sports Section */}
          <section id="sports" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Sports Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add your sports journal entries here */}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
            <div className="space-y-8">
              {/* Add your blog posts here */}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;