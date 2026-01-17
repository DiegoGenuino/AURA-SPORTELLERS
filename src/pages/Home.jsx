import styles from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stories from "../components/Stories/Stories";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Jersey from "../components/Jersey/Jersey";
import Services from "../components/Services/Services";
import Atletas from "../components/Atletas/Atletas";
import ContactFooter from "../components/ContactFooter/ContactFooter";

const Home = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Stories />
      {/* <Team /> */}
      <Services />
      <Atletas />
      <About />
      {/* <Jersey /> */}
      <ContactFooter />
    </main>
  );
};

export default Home;
