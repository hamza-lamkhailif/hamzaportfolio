import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  LayoutList,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";

// Import or create ProjectCard component
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent"); // recent, title, category
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const navigate = useNavigate();

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tools?.some((tool) =>
            tool.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    // Sort
    if (sortBy === "title") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "category") {
      filtered = [...filtered].sort((a, b) =>
        a.category.localeCompare(b.category),
      );
    }
    // Default is 'recent' which maintains original order

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  const stats = [
    { icon: LayoutGrid, value: projectsData.length, label: "Total Projects" },
    { icon: Award, value: categories.length - 1, label: "Categories" },
    { icon: TrendingUp, value: "100%", label: "Success Rate" },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 text-sm font-medium flex items-center gap-2">
                <Sparkles size={14} />
                Portfolio
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world data analysis projects that drive business decisions and
            growth
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 text-center group hover:border-emerald-500/30 transition-colors"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          {/* Search and View Toggle */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects, tools, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-3">
              {/* View Toggle */}
              <div className="flex bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-label="List view"
                >
                  <LayoutList size={18} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
                >
                  <option value="recent">Recent</option>
                  <option value="title">Title</option>
                  <option value="category">Category</option>
                </select>
                <SlidersHorizontal
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-transparent shadow-lg shadow-emerald-500/30"
                    : "border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-slate-900/30 backdrop-blur-sm"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-2 text-xs opacity-60">
                    ({projectsData.filter((p) => p.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        {(searchQuery || selectedCategory !== "All") && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-gray-400 text-sm"
          >
            Showing {filteredProjects.length} of {projectsData.length} projects
            {searchQuery && (
              <span className="text-emerald-400 ml-1">for "{searchQuery}"</span>
            )}
          </motion.div>
        )}

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={viewMode}
              layout
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-6"
              }
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={viewMode === "list" ? "w-full" : ""}
                  >
                    <ProjectCard
                      project={project}
                      viewMode={viewMode}
                      onClick={() =>
                        !project.comingSoon &&
                        navigate(`/projects/${project.id}`)
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-900/50 border border-white/10 flex items-center justify-center">
                <Search className="text-gray-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new data analysis challenges. Let's
            discuss how I can help transform your data into actionable insights.
          </p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-emerald-500/30"
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
