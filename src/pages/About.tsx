import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ExternalLink, Briefcase, Code, Award } from "lucide-react";

const About = () => {
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 space-y-8 md:space-y-12">
      <Card className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden border-none shadow-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-pulse">
              Hey, Tuhin here
            </h1>
            <div className="mt-4 text-lg md:text-xl text-neutral-300">
              <TypeAnimation
                sequence={[
                  "I'm a Data Analyst",
                  1000,
                  "I'm a Chemical Engineer",
                  1000,
                  "I'm a BI Developer",
                  1000,
                  "I'm a Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex space-x-6 mt-6 md:mt-8">
              <a href="https://www.linkedin.com/in/tuhinbhattacharya28" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/_threads_of_karma_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-6 md:mt-8 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all text-sm w-fit"
            >
              Download CV
            </a>
          </div>
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative overflow-hidden rounded-xl md:col-span-1 group"
          onClick={() => setShowAboutDialog(true)}
        >
          <Card className="h-[300px] md:h-[400px] overflow-hidden rounded-xl border-2 border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/30 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-full">
              <img
                src="/lovable-uploads/IMG_8915.PNG"
                alt="Tuhin Bhattacharya"
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-110 cursor-pointer bg-gray-100 dark:bg-gray-800"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center gap-2 text-white bg-amber-500 px-4 py-2 rounded-full font-bold text-sm">
                  <ExternalLink className="w-4 h-4" />
                  View Full Profile
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, y: -3 }}
          onClick={() => setShowAboutDialog(true)}
          className="cursor-pointer md:col-span-2"
        >
          <Card className="h-[300px] md:h-[400px] p-6 md:p-8 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-all duration-300 overflow-auto rounded-xl border-2 border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/30 shadow-lg hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900">
                <Briefcase className="w-6 h-6 text-amber-700 dark:text-amber-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4">
              I'm a Chemical engineer turned data analyst, currently pursuing PGDM in Big Data Analytics at Goa Institute of Management.
              I build business intelligence and analytics solutions that turn messy data into clear, actionable decisions people actually use.
            </p>

            <div className="border-l-4 border-amber-500 pl-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-r-lg mb-4">
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  At Celebal Technologies, I delivered a 54-page Power BI P&L built with 300+ DAX measures, improving report usability and
                  reducing query load times by ~40%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Code className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                I combine engineering rigor with product-minded execution to deliver dashboards, KPI frameworks, and performance-tuned reporting.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      <Dialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            I'm Tuhin — a Chemical engineer turned data analyst, currently pursuing PGDM in Big Data Analytics at Goa Institute of Management, Goa.
            I build business intelligence and analytics solutions that turn messy data into clear, actionable decisions people actually use —
            combining engineering rigor with product-minded execution to deliver dashboards, KPI frameworks, and performance-tuned reporting.
            <br /><br />
            <strong>At Celebal Technologies:</strong>
            <br />
            • Delivered a 54-page Power BI P&L built with 300+ DAX measures and advanced time intelligence, improving report usability and reducing query load times by ~40%.
            <br />
            • Led an internal project to define 150+ KPIs and translate 200+ SQL/DAX queries into reproducible documentation — improving performance and long-term maintainability.
            <br />
            • Developed sustainability simulations for hydrogen production during an ONGC R&D project, blending engineering domain knowledge with analytics to solve practical problems.
            <br /><br />
            <strong>Skills:</strong>
            <br />
            • BI & visualization — Power BI, Power Query, advanced DAX, Excel
            <br />
            • Data fundamentals — SQL, Python, data modeling, ETL best practices
            <br />
            • Operator mindset — KPI design, performance tuning, reproducible documentation, and a bias for execution
            <br />
            • Communication — translate technical complexity into concise, stakeholder-ready insights
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;