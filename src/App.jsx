import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Skills">Parallax</section>
      <section>Skills</section>
      <section id="Projects">parallax</section>
      <section>project1</section>
      <section>project2</section>
      <section>project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
