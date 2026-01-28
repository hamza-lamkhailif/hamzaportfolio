import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    resources: [
      { name: "Resume", path: "/Hamza_Lamkhailif_CV.pdf", download: true },
      {
        name: "GitHub",
        url: "https://github.com/hamza-lamkhailif",
        external: true,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamza-lamkhailif-908333229/",
        external: true,
      },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/hamza-lamkhailif",
      color: "hover:text-gray-300 hover:bg-gray-800/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/hamza-lamkhailif-908333229/",
      color: "hover:text-blue-400 hover:bg-blue-500/10",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:lamkhailifhamza@gmail.com",
      color: "hover:text-emerald-400 hover:bg-emerald-500/10",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative mt-32 border-t border-emerald-500/10 bg-gradient-to-b from-slate-950 to-slate-950/95">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="font-bold text-white text-xl">HL</span>
              </div>
              <div className="leading-tight">
                <h3 className="font-bold text-white text-lg">
                  Hamza Lamkhailif
                </h3>
                <p className="text-sm text-emerald-400">Data Analyst</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Transforming complex data into actionable insights. Specialized in
              SQL, Python, and Excel to drive data-driven decision making and
              business growth.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.download ? (
                    <a
                      href={link.path}
                      download
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/5 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              © {currentYear} Hamza Lamkhailif. Built with{" "}
              <Heart
                size={14}
                className="inline text-emerald-400 animate-pulse"
              />{" "}
              and React.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="#"
                className="hover:text-emerald-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-300 text-xs font-medium">
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
