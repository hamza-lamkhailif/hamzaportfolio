import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Phone,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/xbddlwpo", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setError(
        "Unable to send message. Please try again later or contact me directly.",
      );
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lamkhailifhamza@gmail.com",
      link: "mailto:lamkhailifhamza@gmail.com",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chefchaouen, Morocco",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/hamza-lamkhailif",
      username: "@hamza-lamkhailif",
      color: "hover:text-gray-300 hover:border-gray-300/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/hamza-lamkhailif-908333229/",
      username: "Hamza Lamkhailif",
      color: "hover:text-blue-400 hover:border-blue-400/50",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-400 mb-1">
                        {info.label}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-semibold hover:text-emerald-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Globe size={20} className="text-emerald-400" />
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 ${social.color} transition-all duration-300 group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <social.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">
                        {social.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {social.username}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <div className="relative flex h-3 w-3 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Currently Available
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Open to freelance projects, collaborations, and full-time
                    opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6 hover:border-emerald-500/20 transition-colors duration-300"
            >
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300 flex items-center gap-2"
                  >
                    Full Name
                    <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300 flex items-center gap-2"
                  >
                    Email Address
                    <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <MessageSquare size={16} />
                  Your Message
                  <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                />
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm"
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  status === "loading"
                    ? "bg-emerald-500/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/30"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted via email.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Phone size={32} className="mx-auto text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Prefer a Quick Chat?
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Feel free to reach out directly via email or connect with me on
              social media.
            </p>
            <a
              href="mailto:lamkhailifhamza@gmail.com"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              lamkhailifhamza@gmail.com
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
