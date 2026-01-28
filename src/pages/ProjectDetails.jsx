import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Zap,
  DollarSign,
  ShoppingCart,
  Pizza,
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3,
  Calendar,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* KPI icon mapping */
const kpiIcons = {
  revenue: DollarSign,
  orders: ShoppingCart,
  pizzas: Pizza,
  avg: TrendingUp,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [imageFullscreen, setImageFullscreen] = useState(false);

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6"
      >
        {/* Back Button */}
        <motion.button
          variants={item}
          onClick={() => navigate("/projects")}
          whileHover={{ x: -5 }}
          className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 font-medium mb-8 transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </motion.button>

        {/* Header Section */}
        <motion.div variants={item} className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            {/* Title & Category */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white font-medium hover:border-emerald-500/50 transition-all"
                >
                  <Github size={18} />
                  View Code
                </motion.a>
              )}

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
              >
                <Share2 size={18} />
              </motion.button>
            </div>
          </div>

          {/* Tools/Tech Stack */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300"
              >
                <Zap size={14} className="text-emerald-400" />
                {tool}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* KPIs Section */}
        {project.kpis && project.kpis.length > 0 && (
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BarChart3 size={24} className="text-emerald-400" />
              Key Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.kpis.map((kpi, index) => {
                const Icon = kpiIcons[kpi.icon] || TrendingUp;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-emerald-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {kpi.value}
                    </div>
                    <div className="text-sm text-gray-400">{kpi.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Project Images/Screenshots */}
        {project.images && project.images.length > 0 && (
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Project Showcase
            </h2>

            {/* Main Image */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-4 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="w-full h-[500px] object-contain rounded-xl bg-slate-950/50 cursor-zoom-in"
                  onClick={() => setImageFullscreen(true)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-8 right-8 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white">
                {activeImage + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 border-2 rounded-lg p-1 transition-all ${
                      i === activeImage
                        ? "border-emerald-500 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-20 w-32 object-cover rounded bg-slate-950/50"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Two Column Layout for Methodology and Insights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Methodology */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target size={24} className="text-emerald-400" />
              Methodology
            </h2>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle
                    size={20}
                    className="text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Sales data extracted and aggregated using MySQL</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle
                    size={20}
                    className="text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    KPIs calculated in SQL and validated against Power BI
                    measures
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle
                    size={20}
                    className="text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    Dashboards designed to analyze performance, trends, and
                    product contribution
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle
                    size={20}
                    className="text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    Data validation and quality assurance performed throughout
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Key Insights */}
          {project.insights && project.insights.length > 0 && (
            <motion.div variants={item}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Lightbulb size={24} className="text-emerald-400" />
                Key Insights
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                <ul className="space-y-3">
                  {project.insights.map((insight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* Project Navigation */}
        <motion.div variants={item} className="border-t border-white/10 pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white hover:border-emerald-500/50 transition-all"
            >
              <BarChart3 size={18} />
              View All Projects
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
            >
              Discuss Similar Project
              <ExternalLink size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {imageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageFullscreen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              src={project.images[activeImage]}
              alt={`${project.title} fullscreen`}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              onClick={() => setImageFullscreen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetails;
