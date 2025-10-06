import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Power BI", color: "bg-yellow-500" },
    { name: "SQL", color: "bg-blue-500" },
    { name: "Python", color: "bg-green-600" },
    { name: "DAX", color: "bg-orange-500" },
    { name: "Excel", color: "bg-emerald-600" },
    { name: "Power Query", color: "bg-cyan-500" },
    { name: "Data Modeling", color: "bg-purple-500" },
    { name: "ETL", color: "bg-indigo-500" },
    { name: "ASPEN", color: "bg-red-500" },
    { name: "BI Development", color: "bg-teal-500" },
    { name: "KPI Design", color: "bg-pink-500" },
    { name: "Analytics", color: "bg-violet-500" }
  ];

  const skillSlugs = [
    "microsoftpowerbi",
    "python",
    "mysql",
    "microsoftexcel",
    "postgresql",
    "microsoftsqlserver",
    "pandas",
    "numpy",
    "jupyter"
  ];

  const topSkills = [
    { name: "Microsoft Power BI", level: "Expert" },
    { name: "SQL", level: "Advanced" },
    { name: "DAX", level: "Expert" },
    { name: "MS Excel", level: "Advanced" },
    { name: "Python", level: "Intermediate" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500";
      case "Advanced": return "bg-yellow-500";
      case "Intermediate": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <Card className="w-full h-[40vh] relative overflow-hidden mb-8 md:mb-12">
          <div className="absolute inset-0">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              <div className="absolute inset-x-0 top-4 md:top-8 z-10">
                <MorphingText
                  texts={["Core Competencies", "Technical Skills", "Tools & Technologies"]}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 px-4"
                />
              </div>
              {skills.map((skill, idx) => (
                <MatterBody
                  key={idx}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${(idx * 20) % 80 + 10}%`}
                  y={`${(idx * 15) % 60 + 10}%`}
                  angle={Math.random() * 20 - 10}
                >
                  <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${skill.color} text-white rounded-full hover:cursor-grab px-4 py-2 md:px-6 md:py-3 whitespace-nowrap`}>
                    {skill.name}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </Card>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-6 h-[40vh]">
            <IconCloud iconSlugs={skillSlugs} />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-card rounded-lg p-4 md:p-6 shadow-lg cursor-pointer h-[40vh] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-yellow-600 dark:text-yellow-500">Top Skills</h3>
              <div className="space-y-3 md:space-y-4">
                {topSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold mb-2">Additional Expertise</h4>
              <div className="flex flex-wrap gap-1">
                {["Data Modeling", "ETL", "KPI Design", "Performance", "Dashboards", "Analytics"].map((expertise, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
