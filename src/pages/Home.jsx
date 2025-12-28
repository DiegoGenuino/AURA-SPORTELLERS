import styles from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stories from "../components/Stories/Stories";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Services from "../components/Services/Services";
import Atletas from "../components/Atletas/Atletas";
import ContactFooter from "../components/ContactFooter/ContactFooter";

const Home = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Stories />
      <About />
      <Team />
      <Services />
      <Atletas />
      <ContactFooter />
    </main>
  );
};

export default Home;
