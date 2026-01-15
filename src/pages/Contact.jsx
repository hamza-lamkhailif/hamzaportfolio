import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setError("All fields are required.");
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
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Unable to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted text-lg"
        >
          <p>
            I’m open to data analyst roles, freelance work, and professional
            collaborations. Feel free to reach out.
          </p>

          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <Mail size={18} /> your@email.com
          </a>

          <a
            href="https://github.com/hamzalamkhailif"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card p-6 rounded-xl shadow-md space-y-4"
        >
          <input
            name="name"
            placeholder="Your name"
            className="w-full p-3 rounded bg-background border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded bg-background border border-gray-700 focus:ring-2 focus:ring-accent outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="w-full p-3 rounded bg-background border border-gray-700 focus:ring-2 focus:ring-accent outline-none resize-none"
          />

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.p>
          )}

          {/* Success */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 text-sm"
            >
              Your message has been sent successfully.
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold transition
              ${
                status === "loading"
                  ? "bg-accent/50 cursor-not-allowed"
                  : "bg-accent hover:opacity-90"
              } text-background`}
          >
            <Send size={16} />
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
