import { motion, useScroll, useTransform } from "framer-motion";
import {
  Database,
  Code,
  BarChart2,
  Brain,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
} from "lucide-react";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const skills = [
    {
      icon: Database,
      label: "SQL & Database Management",
      description: "PostgreSQL, MySQL, Query Optimization",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      label: "Python Programming",
      description: "Pandas, NumPy, Data Analysis",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: BarChart2,
      label: "Data Visualization",
      description: "Tableau, Power BI, Matplotlib",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      label: "Statistical Analysis",
      description: "Hypothesis Testing, Regression",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      label: "Business Intelligence",
      description: "KPI Dashboards, Reports",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Award,
      label: "Excel Mastery",
      description: "Pivot Tables, VBA, Advanced Functions",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const experience = [
    {
      year: "2024",
      title: "Senior Data Analyst",
      company: "Tech Company",
      description:
        "Led data-driven initiatives that improved efficiency by 40%",
    },
    {
      year: "2022",
      title: "Data Analyst",
      company: "Startup Inc",
      description: "Developed automated reporting systems saving 15 hours/week",
    },
    {
      year: "2020",
      title: "Junior Analyst",
      company: "Analytics Firm",
      description: "Built dashboards and performed statistical analysis",
    },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
    { value: "100%", label: "Success Rate" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-emerald-400 text-sm font-medium">
                About Me
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Turning Data Into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Decisions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about uncovering insights that drive business growth
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/profile.jpg"
                  alt="Hamza Lamkhailif"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-300" />

                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-white text-lg">HL</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">
                        Hamza Lamkhailif
                      </h3>
                      <p className="text-emerald-400 text-sm font-medium">
                        Data Analyst
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          Chefchaouen, Morocco
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 grid grid-cols-2 gap-3"
              >
                <motion.a
                  href="/Hamza_Lamkhailif_CV.pdf"
                  download
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/30"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-emerald-500/50 text-emerald-400 rounded-xl font-semibold text-sm hover:bg-emerald-500/10 transition-colors"
                >
                  Get in Touch
                  <ExternalLink size={16} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Hello! 👋</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="text-emerald-400 font-semibold">
                    Hamza Lamkhailif
                  </span>
                  , a dedicated{" "}
                  <strong className="text-white">Data Analyst</strong> based in
                  Chefchaouen, Morocco. I specialize in transforming complex
                  datasets into clear, actionable insights that drive business
                  decisions and growth.
                </p>
                <p>
                  With expertise in <strong className="text-white">SQL</strong>,{" "}
                  <strong className="text-white">Python</strong>, and advanced{" "}
                  <strong className="text-white">Excel</strong>, I build
                  automated reporting systems, create compelling visualizations,
                  and uncover trends that matter. My analytical approach
                  combines technical proficiency with business acumen to deliver
                  solutions that truly impact the bottom line.
                </p>
                <p>
                  I'm passionate about continuous learning and staying current
                  with the latest tools and techniques in data science. Whether
                  it's building dashboards in{" "}
                  <strong className="text-white">Tableau</strong>, optimizing
                  database queries, or performing statistical analysis, I bring
                  precision and creativity to every project.
                </p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center group hover:border-emerald-500/30 transition-colors"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Core Competencies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {skill.label}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Professional Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500" />

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 border-4 border-slate-950 shadow-lg shadow-emerald-500/50" />

                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                      className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-2">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Briefcase size={14} />
                        <span>{item.company}</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-emerald-500/30"
          >
            Start a Conversation
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
