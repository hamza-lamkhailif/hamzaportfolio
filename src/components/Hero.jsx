import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// CTA button animations
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 0px 12px rgba(250, 250, 250, 0.6)" },
};

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
  });

  // Initialize tsparticles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden">
      {/* Animated particles background */}
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
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 5 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "bounce",
            },
            links: {
              enable: true,
              distance: 120,
              color: "#4ade80",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-accent">Hamza Lamkhailif</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-300 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="text-accent">{text}</span>
        <Cursor cursorStyle="|" />
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <motion.a
          href="/Hamza_Lamkhailif_CV.pdf"
          download
          className="px-6 py-3 bg-accent text-background rounded-full font-semibold hover:bg-accent/80 transition"
          whileHover="hover"
          variants={buttonVariants}
        >
          Download CV
        </motion.a>

        <motion.a
          href="#projects"
          className="px-6 py-3 border border-accent text-accent rounded-full font-semibold hover:bg-accent/20 transition"
          whileHover="hover"
          variants={buttonVariants}
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
