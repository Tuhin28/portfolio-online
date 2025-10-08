import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Card } from "@/components/ui/card";
import { Calendar, Award, Briefcase, GraduationCap, MapPin, Trophy, Star, CheckCircle } from "lucide-react";

const Journey = () => {
  const journeyData = [
    {
      year: "2025 - 2027",
      title: "PGDM - Big Data Analytics",
      institution: "Goa Institute of Management, Goa",
      description: "Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
      achievement: "Pursuing",
      position: "Junior Core Committee Member, Cognition - The Data Science & Analytics club"
    },
    {
      year: "July 2023 - Dec 2023",
      title: "Business Intelligence Intern",
      institution: "Celebal Technologies",
      description: "Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times. Implemented advanced time-intelligence functions for comprehensive financial analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      achievement: "6 Months Internship",
      highlight: "Delivered robust BI solution that replaced static reporting and empowered leadership with dynamic insights."
    },
    {
      year: "2019 - 2023",
      title: "B.E. Chemical Engineering",
      institution: "Jadavpur University",
      description: "Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC. Core Committee Member directing Logistics and Design team for departmental centenary celebration.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
      achievement: "8.32 CGPA",
      position: "Core Committee Member - Chemical Engineering Centenary Celebration"
    },
    {
      year: "Academic Projects",
      title: "Research & Development",
      institution: "ONGC R&D Projects",
      description: "Hydrogen Production & Carbon Footprint Analysis: Designed sophisticated biomass gasification simulation using ASPEN, validated 99% pure hydrogen extraction. Aqueous Retarded Acid Formulation: Identified optimal solution for limestone reservoirs in 6-member R&D team.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      achievement: "2 Major Projects",
      highlight: "Combined engineering domain knowledge with analytics to solve practical problems"
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education",
      institution: "Bankura Banga Vidyalaya",
      description: "Completed higher secondary education in Science stream with exceptional academic performance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2922&auto=format&fit=crop",
      achievement: "90.00%",
      highlight: "Strong foundation in science and mathematics"
    },
    {
      year: "2008 - 2016",
      title: "Secondary Education",
      institution: "Bankura Zilla School",
      description: "Completed secondary education with outstanding academic results, demonstrating early excellence in analytical and problem-solving skills.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop",
      achievement: "93.85%",
      highlight: "Foundation years building analytical thinking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="relative w-full mb-8 md:mb-12">
          <GooeyText
            texts={["My Journey", "My Path", "My Story", "My Experience"]}
            morphTime={1}
            cooldownTime={0.25}
            className="h-[80px] md:h-[100px] flex items-center justify-center font-bold mb-6"
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500"
          />
        </div>

        <div className="relative ml-0 w-full bg-transparent overflow-hidden rounded-none py-8 md:py-12 mb-12">
          <VelocityScroll
            text="EDUCATION & CAREER JOURNEY THROUGH THE YEARS"
            default_velocity={3}
            className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </div>

        <div className="relative space-y-8 md:space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-xl border-2 border-gray-200/60 dark:border-gray-800/60 backdrop-blur hover:border-amber-300 dark:hover:border-amber-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className={`relative h-[250px] md:h-[350px] overflow-hidden group ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    {index < 2 && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full font-bold text-xs md:text-sm shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className={`p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/30 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="mb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900">
                          {item.year.includes("2025") || item.year.includes("Pursuing") ? (
                            <GraduationCap className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                          ) : item.year.includes("Intern") || item.title.includes("Intern") ? (
                            <Briefcase className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                          ) : (
                            <Award className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                        <p className="text-base md:text-lg text-amber-600 dark:text-amber-500 font-semibold">
                          {item.institution}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-bold border border-amber-200 dark:border-amber-800 shadow-sm">
                        <Trophy className="w-4 h-4" />
                        {item.achievement}
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div className="border-l-4 border-amber-500 pl-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-r-lg mb-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-semibold">
                            {item.highlight}
                          </p>
                        </div>
                      </div>
                    )}

                    {item.position && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg font-medium"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">Position:</span>
                        <span>{item.position}</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
