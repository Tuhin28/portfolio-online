import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ExternalLink, Sparkles, Target, Lightbulb } from "lucide-react";

const About = () => {
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white p-4 md:p-8 space-y-8 md:space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden border-none shadow-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              >
                Hey, Tuhin here
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl text-neutral-300"
              >
                <TypeAnimation
                  sequence={[
                    "I turn data into stories",
                    2000,
                    "I craft insights that matter",
                    2000,
                    "I build dashboards people use",
                    2000,
                    "I solve problems with data",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex space-x-6 mt-6 md:mt-8"
              >
                <a href="https://www.linkedin.com/in/tuhinbhattacharya28" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/_threads_of_karma_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-110" />
                </a>
              </motion.div>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 md:mt-8 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm w-fit shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative overflow-hidden rounded-2xl md:col-span-1 group cursor-pointer"
          onClick={() => setShowAboutDialog(true)}
        >
          <Card className="h-[300px] md:h-[400px] overflow-hidden rounded-2xl border border-amber-200/50 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700 bg-gradient-to-br from-white via-amber-50/30 to-white dark:from-gray-900 dark:to-amber-950/30 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="relative h-full">
              <img
                src="/lovable-uploads/IMG_8915.PNG"
                alt="Tuhin Bhattacharya"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105 bg-gray-50 dark:bg-gray-800"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-center gap-2 text-white bg-amber-500/90 backdrop-blur-sm px-4 py-2.5 rounded-full font-bold text-sm shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                  Read My Story
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-2 space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setShowAboutDialog(true)}
            className="cursor-pointer"
          >
            <Card className="p-6 md:p-8 hover:bg-gradient-to-br from-white via-amber-50/40 to-white dark:hover:bg-gradient-to-br dark:from-gray-900 dark:via-amber-950/30 dark:to-gray-900 transition-all duration-500 overflow-auto rounded-2xl border border-amber-200/50 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-5">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 shadow-md"
                >
                  <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">The Journey</h2>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mt-1">From Labs to Dashboards</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                It started in a chemical engineering lab, surrounded by beakers and reactions. But somewhere between
                titrations and thermodynamics, I discovered something unexpected: <span className="font-semibold text-amber-700 dark:text-amber-400">a passion for patterns,
                insights, and the stories hidden in data.</span>
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                Today, I'm pursuing Big Data Analytics at Goa Institute of Management, building BI solutions
                that transform raw numbers into decisions that matter. My engineering background taught me precision;
                data analytics taught me impact.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-md hover:shadow-xl transition-all duration-500 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: -12, scale: 1.1 }}
                    className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50"
                  >
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Impact</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  At Celebal Technologies, I built a 54-page Power BI P&L with 300+ DAX measures,
                  <span className="font-semibold text-blue-700 dark:text-blue-400"> cutting query times by 40%</span> and
                  making reports people actually wanted to use.
                </p>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 border border-green-200/50 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 shadow-md hover:shadow-xl transition-all duration-500 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="p-2.5 rounded-lg bg-green-100 dark:bg-green-900/50"
                  >
                    <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Philosophy</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Data isn't just numbers. It's about <span className="font-semibold text-green-700 dark:text-green-400">clarity,
                  actionable insights, and tools that empower teams</span> to make better decisions faster.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <Dialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              The Full Story
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  From Engineering to Analytics
                </h3>
                <p>
                  I'm Tuhin — a Chemical Engineer who traded lab coats for dashboards and discovered
                  a passion for turning messy data into clear, actionable insights. Currently pursuing
                  PGDM in Big Data Analytics at Goa Institute of Management, I combine engineering rigor
                  with product-minded execution to build BI solutions that people actually use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  What I've Built
                </h3>
                <p className="mb-3">
                  <span className="font-semibold">At Celebal Technologies:</span>
                </p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>
                    Delivered a <span className="font-semibold text-amber-600 dark:text-amber-400">54-page Power BI P&L</span> built
                    with 300+ DAX measures and advanced time intelligence, improving report usability and reducing query load times by ~40%.
                  </li>
                  <li>
                    Led an internal project to define <span className="font-semibold text-amber-600 dark:text-amber-400">150+ KPIs</span> and
                    translate 200+ SQL/DAX queries into reproducible documentation — improving performance and long-term maintainability.
                  </li>
                  <li>
                    Developed sustainability simulations for hydrogen production during an ONGC R&D project, blending engineering
                    domain knowledge with analytics to solve practical problems.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                  What I Bring
                </h3>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>
                    <span className="font-semibold">BI & Visualization:</span> Power BI, Power Query, advanced DAX, Excel
                  </li>
                  <li>
                    <span className="font-semibold">Data Fundamentals:</span> SQL, Python, data modeling, ETL best practices
                  </li>
                  <li>
                    <span className="font-semibold">Operator Mindset:</span> KPI design, performance tuning, reproducible
                    documentation, and a bias for execution
                  </li>
                  <li>
                    <span className="font-semibold">Communication:</span> Translate technical complexity into concise,
                    stakeholder-ready insights
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center italic text-gray-600 dark:text-gray-400">
                  I don't just analyze data — I craft stories that drive decisions and empower teams to move faster.
                </p>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
