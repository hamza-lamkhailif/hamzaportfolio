import { motion } from "framer-motion";
import { User, Database, Code, BarChart2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Hamza Lamkhailif"
            className="rounded-xl w-64 h-64 object-cover shadow-lg"
          />
        </motion.div>

        {/* Bio + Skills */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col gap-6"
        >
          <p className="text-muted text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="text-accent font-semibold">Hamza Lamkhailif</span>,
            a passionate <strong>Data Analyst</strong> and{" "}
            <strong>Frontend Developer</strong> from Chefchaouen, Morocco. I
            transform raw data into actionable insights using Python, SQL, and
            modern visualization tools. I also build professional,
            high-performance web applications using React.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: Database, label: "SQL & Databases" },
              { icon: Code, label: "Web Development (React, JS)" },
              { icon: BarChart2, label: "Data Visualization" },
              { icon: User, label: "Problem Solving" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 bg-card/20 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <skill.icon size={22} className="text-accent" />
                <span className="font-medium">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
