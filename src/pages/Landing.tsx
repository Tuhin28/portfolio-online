import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[40vh] md:h-screen relative"
      >
        <img
          src="/lovable-uploads/c89c229d-4bfc-4750-aaa3-a1f29cf5d482.png"
          alt="Tuhin Bhattacharya"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12"
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-4 block"
          >
            WELCOME TO MY PORTFOLIO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            From Chemical Labs to{" "}
            <span className="text-yellow-500">Data Dashboards</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Hi, I'm Tuhin — a Chemical Engineer who discovered a passion for turning
            raw data into stories that drive decisions. Currently pursuing Big Data
            Analytics at Goa Institute of Management, I blend engineering precision
            with analytics thinking to build BI solutions that people actually use.
            <br /><br />
            My journey started in chemical engineering labs and led me to crafting
            Power BI dashboards with 300+ DAX measures, optimizing performance, and
            helping teams make better decisions faster.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
          >
            EXPLORE MY JOURNEY
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;