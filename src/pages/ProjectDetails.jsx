import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import {
  Github,
  ExternalLink,
  Zap,
  BarChart2,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const project = projectsData.find((p) => p.id === id);

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.button
        variants={item}
        onClick={() => navigate(-1)}
        className="text-accent font-medium hover:underline flex items-center gap-2 w-fit"
        whileHover={{ x: -5 }}
      >
        ← Back
      </motion.button>

      {/* Title & Links */}
      <motion.div
        variants={item}
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted mt-1">{project.category}</p>
        </div>

        <div className="flex gap-6">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline"
            >
              <Github size={18} /> View Code
            </motion.a>
          )}
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline"
            >
              <ExternalLink size={18} /> Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div variants={item} className="flex flex-wrap gap-3">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="bg-accent/10 text-accent text-sm px-3 py-1 rounded flex items-center gap-1"
          >
            <Zap size={14} /> {tool}
          </span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p variants={item} className="text-lg text-muted">
        {project.description}
      </motion.p>

      {/* KPIs */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {project.kpis.map((kpi) => (
          <motion.div
            key={kpi.label}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-xl p-6 text-center shadow-md flex flex-col items-center gap-2"
          >
            <span className="text-accent">
              {kpi.label.includes("Matches") && <BarChart2 size={24} />}
              {kpi.label.includes("Goals") && <TrendingUp size={24} />}
              {kpi.label.includes("Revenue") && <TrendingUp size={24} />}
              {kpi.label.includes("Products") && <CheckCircle size={24} />}
            </span>
            <p className="text-3xl font-bold">{kpi.value}</p>
            <p className="text-muted">{kpi.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Screenshots */}
      <motion.div variants={item} className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={
              project.images?.[activeImage] ||
              "https://via.placeholder.com/800x400"
            }
            alt="Project screenshot"
            className="rounded-xl shadow-md w-full max-h-[400px] object-cover"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {project.images?.length > 1 && (
          <div className="flex justify-center gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === activeImage ? "bg-accent" : "bg-accent/30"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Key Insights */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
          <CheckCircle size={20} /> Key Insights
        </h2>
        <ul className="list-disc list-inside text-muted space-y-1">
          {project.insights.map((insight, i) => (
            <li key={i}>{insight}</li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetails;
