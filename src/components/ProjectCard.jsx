import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      whileHover={project.comingSoon ? "rest" : "hover"}
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.04 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`group relative bg-card p-6 rounded-xl cursor-pointer shadow-md overflow-hidden transition-all duration-300 ${
        project.comingSoon ? "opacity-80 cursor-not-allowed" : ""
      }`}
    >
      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
        transition={{ duration: 0.3 }}
      />

      {/* Coming Soon Badge */}
      {project.comingSoon && (
        <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 text-xs font-bold rounded-full shadow-lg z-20">
          Coming Soon
        </div>
      )}

      {/* Subtle Overlay for inactive feel */}
      {project.comingSoon && (
        <div className="absolute inset-0 bg-black/20 rounded-xl z-10 pointer-events-none"></div>
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Title */}
        <div className="mb-4">
          <h3
            className={`text-xl font-semibold transition-colors ${
              project.comingSoon ? "text-muted" : "group-hover:text-accent"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="bg-accent/10 text-accent text-xs px-2 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Links */}
        {!project.comingSoon && (
          <motion.div
            className="flex gap-4 mt-auto"
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-accent hover:underline"
              >
                <Github size={16} /> Code
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-accent hover:underline"
              >
                <ExternalLink size={16} /> Live
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
