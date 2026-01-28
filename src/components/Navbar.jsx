import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  User,
  Mail,
  Menu,
  X,
  Download,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { name: "Home", path: "/", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: BarChart3 },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.95)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor: navBackground }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-emerald-500/5"
            : "backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <NavLink to="/">
                <Logo />
              </NavLink>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ name, path, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-emerald-400"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={16} className="relative z-10" />
                      <span className="relative z-10">{name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-emerald-500/10 rounded-full border border-emerald-500/30"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* CTA Button */}
              <motion.a
                href="/Hamza_Lamkhailif_CV.pdf"
                download
                className="ml-4 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-emerald-500/10 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map(({ name, path, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <NavLink
                      to={path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                            : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                        }`
                      }
                    >
                      <Icon size={18} />
                      <span>{name}</span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="/Hamza_Lamkhailif_CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/30"
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content jump */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
