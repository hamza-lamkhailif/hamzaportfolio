import { motion, useScroll, useTransform } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Data Analyst",
      "SQL Expert",
      "Python Developer",
      "Excel Specialist",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(74, 222, 128, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#4ade80" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: { min: 1, max: 4 }, random: true },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4ade80",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-sm font-medium">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Hamza Lamkhailif
            </span>
            <motion.span
              className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/30 -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8 min-h-[80px] flex items-center justify-center"
        >
          <p className="text-2xl md:text-4xl font-semibold text-gray-200">
            <span className="text-emerald-400">{text}</span>
            <Cursor cursorStyle="|" cursorColor="#4ade80" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming raw data into actionable insights with{" "}
          <span className="text-emerald-400 font-semibold">SQL</span>,{" "}
          <span className="text-emerald-400 font-semibold">Python</span>, and{" "}
          <span className="text-emerald-400 font-semibold">Excel</span>.
          Building data-driven solutions that drive business growth.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1 group-hover:text-emerald-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="/Hamza_Lamkhailif_CV.pdf"
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold overflow-hidden shadow-lg shadow-emerald-500/50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/projects"
              className="group px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 rounded-full font-semibold hover:border-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              View Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-gray-400 hover:text-white transition-all backdrop-blur-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full p-1.5 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 bg-emerald-400 rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
          Scroll
        </span>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
