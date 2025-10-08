import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Palette, Trophy, BookOpen, Camera, Music, Gamepad2, Pen, Heart } from "lucide-react";

const Hobbies = () => {
  const navigate = useNavigate();

  const hobbiesData = [
    {
      category: "Digital Art",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      items: [
        {
          title: "3D Design & Modeling",
          description: "Creating immersive 3D experiences and visual designs using modern design tools",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
          tags: ["3D", "Design", "Creative"]
        },
        {
          title: "UI/UX Exploration",
          description: "Experimenting with user interface designs and interactive experiences",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940&auto=format&fit=crop",
          tags: ["UI", "UX", "Design"]
        },
        {
          title: "Digital Illustrations",
          description: "Crafting digital artwork and visual storytelling pieces",
          image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?q=80&w=2940&auto=format&fit=crop",
          tags: ["Art", "Illustration", "Digital"]
        }
      ]
    },
    {
      category: "Sports & Fitness",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      items: [
        {
          title: "Badminton",
          description: "Competitive badminton player, focusing on agility and strategic gameplay",
          image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2940&auto=format&fit=crop",
          tags: ["Badminton", "Competition", "Fitness"]
        },
        {
          title: "Fitness Training",
          description: "Maintaining physical wellness through structured workout routines",
          image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop",
          tags: ["Fitness", "Health", "Wellness"]
        },
        {
          title: "Outdoor Activities",
          description: "Exploring nature through hiking and outdoor sports",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2940&auto=format&fit=crop",
          tags: ["Outdoor", "Adventure", "Nature"]
        }
      ]
    },
    {
      category: "Creative Writing",
      icon: Pen,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      items: [
        {
          title: "Blog Writing",
          description: "Sharing insights on data analytics, technology, and personal growth",
          image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2946&auto=format&fit=crop",
          tags: ["Writing", "Blog", "Content"]
        },
        {
          title: "Technical Documentation",
          description: "Creating clear and comprehensive technical guides and tutorials",
          image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2940&auto=format&fit=crop",
          tags: ["Documentation", "Technical", "Writing"]
        },
        {
          title: "Storytelling",
          description: "Crafting narratives that blend data insights with human experiences",
          image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=2874&auto=format&fit=crop",
          tags: ["Stories", "Creative", "Narrative"]
        }
      ]
    },
    {
      category: "Learning & Exploration",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      items: [
        {
          title: "Technology Trends",
          description: "Staying updated with latest developments in AI, data science, and tech",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop",
          tags: ["Tech", "AI", "Innovation"]
        },
        {
          title: "Online Courses",
          description: "Continuous learning through structured online education platforms",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop",
          tags: ["Learning", "Education", "Growth"]
        },
        {
          title: "Industry Research",
          description: "Deep diving into business intelligence and analytics methodologies",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
          tags: ["Research", "BI", "Analytics"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
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
              <a href="#art" className="text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
                Digital Art
              </a>
              <a href="#sports" className="text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
                Sports
              </a>
              <a href="#writing" className="text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
                Writing
              </a>
              <a href="#learning" className="text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">
                Learning
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">
              Hobbies & Interests
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Beyond data and analytics, exploring creative pursuits and personal passions
            </p>
          </motion.div>

          {hobbiesData.map((section, sectionIndex) => (
            <section
              key={sectionIndex}
              id={section.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 md:mb-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${section.color} text-white font-bold text-lg md:text-xl shadow-lg`}>
                  <section.icon className="w-6 h-6" />
                  {section.category}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className={`overflow-hidden h-full cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 ${section.bgColor} border-gray-200/60 dark:border-gray-800/60`}>
                      <div className="relative h-56 overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-white">
                            <Heart className="w-5 h-5" />
                            <span className="font-semibold">Passionate About</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`px-3 py-1 bg-gradient-to-r ${section.color} bg-opacity-10 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700 cursor-default`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-2 border-amber-200 dark:border-amber-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Balance in Life
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I believe in maintaining a healthy balance between professional growth and personal interests.
                These hobbies fuel my creativity, keep me physically active, and help me approach problems
                from diverse perspectives in my data analytics career.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
