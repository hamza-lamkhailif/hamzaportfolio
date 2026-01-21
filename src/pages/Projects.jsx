import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="flex justify-center gap-4 flex-wrap mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-accent text-background border-accent"
                : "border-accent text-accent hover:bg-accent/20"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            >
              <ProjectCard
                project={project}
                onClick={() =>
                  !project.comingSoon && navigate(`/projects/${project.id}`)
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
