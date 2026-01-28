import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Animated Icon Container */}
      <motion.div
        className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Animated background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
        />

        {/* Logo text */}
        <span className="relative z-10 font-bold text-white text-lg tracking-tight">
          HL
        </span>

        {/* Glow effect on hover */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/30 group-hover:to-cyan-400/30 transition-all duration-500" />
      </motion.div>

      {/* Text Content */}
      <div className="leading-tight hidden sm:block">
        <motion.p
          className="font-semibold text-white tracking-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hamza Lamkhailif
        </motion.p>
        <motion.div
          className="flex items-center gap-1.5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-xs text-emerald-400 font-medium">
            Data Analyst
          </span>
          {/* Animated dot indicator */}
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Logo;
