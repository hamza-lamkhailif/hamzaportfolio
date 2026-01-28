import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  ArrowLeft,
  FileQuestion,
  Compass,
  Mail,
  LayoutGrid,
  User,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // You can implement actual search or redirect to projects/about
      navigate(`/projects?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const quickLinks = [
    {
      icon: Home,
      label: "Home",
      path: "/",
      description: "Back to homepage",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: LayoutGrid,
      label: "Projects",
      path: "/projects",
      description: "View my work",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: User,
      label: "About",
      path: "/about",
      description: "Learn about me",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Mail,
      label: "Contact",
      path: "/contact",
      description: "Get in touch",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FileQuestion className="text-emerald-400 w-24 h-24" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Compass className="text-cyan-400 w-20 h-20" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* 404 Number with Glitch Effect */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.h1
            className="text-[10rem] md:text-[14rem] font-extrabold leading-none bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            404
          </motion.h1>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-8 -right-8 w-16 h-16 border-4 border-emerald-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-8 w-12 h-12 border-4 border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-emerald-400 text-sm font-medium flex items-center gap-2">
              <Sparkles size={14} />
              Page Not Found
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! You've Wandered{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Off the Map
            </span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            The page you're looking for doesn't exist, was removed, or is
            temporarily unavailable. But don't worry—let's get you back on
            track!
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div variants={itemVariants} className="mb-12 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for projects, pages, or topics..."
              className="w-full pl-12 pr-32 py-4 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold text-sm"
            >
              Search
            </motion.button>
          </form>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={link.path}
                  className="group block bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <link.icon size={24} className="text-white" />
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {link.label}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {link.description}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white font-medium hover:border-emerald-500/50 transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Help Text */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm mt-12"
        >
          Still can't find what you're looking for?{" "}
          <Link
            to="/contact"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            Contact me
          </Link>{" "}
          and I'll help you out.
        </motion.p>

        {/* Fun Easter Egg */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-4 bg-slate-900/30 border border-white/5 rounded-xl max-w-md mx-auto"
        >
          <p className="text-gray-500 text-xs mb-2">Fun fact:</p>
          <p className="text-gray-400 text-sm">
            The HTTP 404 status code was named after room 404 at CERN, where the
            World Wide Web was invented. The room didn't actually exist—kind of
            like this page! 😄
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;
