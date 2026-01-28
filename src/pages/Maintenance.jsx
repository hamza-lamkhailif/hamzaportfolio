import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Wrench,
  Clock,
  Mail,
  CheckCircle,
  Github,
  Linkedin,
  Sparkles,
  Zap,
  RefreshCw,
} from "lucide-react";

const Maintenance = () => {
  const [countdown, setCountdown] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [progress, setProgress] = useState(0);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Progress simulation
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev < 95 ? prev + 0.5 : prev));
    }, 1000);

    return () => clearInterval(progressTimer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wrench className="text-emerald-400/30 w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="text-cyan-400/30 w-20 h-20" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Icon/Illustration */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Image Container */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-64 h-64 relative"
            >
              <img
                src="/mad-designer.png"
                alt="Maintenance"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Spinning Gear */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50"
            >
              <RefreshCw className="text-white" size={28} />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-full"
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 font-medium">
                  Upgrading Systems
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-emerald-400 text-sm font-medium flex items-center gap-2">
              <Zap size={14} />
              Maintenance Mode
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            We're Making Things{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Better
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Our portfolio is currently undergoing some exciting improvements.
            We'll be back shortly with enhanced features and a better
            experience.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="text-emerald-400" size={20} />
            <span className="text-gray-400 text-sm font-medium">
              Estimated Time Remaining
            </span>
          </div>
          <div className="flex justify-center gap-4">
            {[
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 min-w-[100px]"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-400">Upgrade Progress</span>
            <span className="text-emerald-400 font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Notify Me Form */}
        <motion.div variants={itemVariants} className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">
            Get Notified When We're Back
          </h3>

          {!subscribed ? (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all whitespace-nowrap"
              >
                Notify Me
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 max-w-md mx-auto"
            >
              <CheckCircle size={20} />
              <span className="font-medium">
                Thanks! We'll notify you soon.
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* What We're Working On */}
        <motion.div variants={itemVariants} className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-6">
            What We're Working On
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Sparkles, title: "Enhanced UI", desc: "Sleeker design" },
              { icon: Zap, title: "Performance", desc: "Faster loading" },
              {
                icon: CheckCircle,
                title: "New Features",
                desc: "More content",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-emerald-500/30 transition-all"
              >
                <feature.icon className="w-10 h-10 text-emerald-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-1">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-400 text-sm mb-4">
            Meanwhile, connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            {[
              {
                icon: Github,
                url: "https://github.com/hamza-lamkhailif",
                color: "hover:text-gray-300",
              },
              {
                icon: Linkedin,
                url: "https://www.linkedin.com/in/hamza-lamkhailif-908333229/",
                color: "hover:text-blue-400",
              },
              {
                icon: Mail,
                url: "mailto:lamkhailifhamza@gmail.com",
                color: "hover:text-emerald-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 transition-all ${social.color}`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm mt-10"
        >
          Thank you for your patience! We're working hard to serve you better.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Maintenance;
