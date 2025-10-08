import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 h-[40vh] md:h-screen relative overflow-hidden group"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src="/lovable-uploads/c89c229d-4bfc-4750-aaa3-a1f29cf5d482.png"
          alt="Tuhin Bhattacharya"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 bg-gradient-to-br from-white via-amber-50/20 to-white"
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block text-xs md:text-sm uppercase tracking-widest text-amber-600 font-semibold mb-4"
          >
            Welcome to My Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            From Chemical Labs to{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Data Dashboards
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4 mb-8"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Hi, I'm Tuhin — a Chemical Engineer who discovered a passion for turning
              raw data into stories that drive decisions.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Currently pursuing Big Data Analytics at Goa Institute of Management,
              I blend engineering precision with analytics thinking to build BI solutions
              that people actually use.
            </p>

            <div className="pt-2 border-l-4 border-amber-500 pl-4 bg-amber-50/50 py-3 rounded-r-lg">
              <p className="text-sm md:text-base text-gray-700 italic">
                My journey started in chemical engineering labs and led me to crafting
                Power BI dashboards with 300+ DAX measures, optimizing performance, and
                helping teams make better decisions faster.
              </p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <span>Explore My Journey</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
