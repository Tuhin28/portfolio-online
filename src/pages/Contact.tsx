import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "tuhin.bhattacharya25b@gim.ac.in",
      link: "mailto:tuhin.bhattacharya25b@gim.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7548079216",
      link: "tel:+917548079216"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Goa, India",
      link: "https://maps.google.com/?q=Goa,India"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "@tuhinbhattacharya28",
      link: "https://www.linkedin.com/in/tuhinbhattacharya28",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      username: "@_threads_of_karma_",
      link: "https://www.instagram.com/_threads_of_karma_/",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on data analytics and business intelligence projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-2">{info.title}</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{info.content}</p>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Connect on Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} text-white rounded-lg p-6 flex items-center justify-between transition-all duration-300 shadow-lg`}
                >
                  <div className="flex items-center">
                    <social.icon className="w-8 h-8 md:w-10 md:h-10 mr-4" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">{social.name}</h3>
                      <p className="text-sm md:text-base opacity-90">{social.username}</p>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Send a Message</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white h-32 md:h-40 resize-none transition-all text-sm md:text-base"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 text-white py-3 md:py-4 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg text-sm md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8 md:mt-12 text-sm md:text-base text-gray-600 dark:text-gray-400"
        >
          <p>Open to opportunities in Business Intelligence, Data Analytics, and Product Development</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
