import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Skills" ><Parallax type="skills"/></section>
      <section>Skills</section>
      <section id="Projects" ><Parallax type="projects"/></section>
      <section>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
