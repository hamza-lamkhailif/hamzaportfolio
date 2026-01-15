import Hero from "../components/Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects /> {/* Projects section is inside home */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
