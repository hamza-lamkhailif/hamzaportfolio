import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted text-center md:text-left">
          © {new Date().getFullYear()} Hamza Lamkhailif — Data Analyst
        </p>

        <div className="flex gap-6 text-muted">
          <a
            href="https://github.com/hamza-lamkhailif"
            className="hover:text-accent transition"
            target="_blank"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-lamkhailif-908333229/"
            className="hover:text-accent transition"
            target="_blank"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:lamkhailifhamza@gmail.com"
            className="hover:text-accent transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
