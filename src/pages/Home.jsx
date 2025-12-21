import { useState } from 'react';
import styles from "./Home.module.css";
import navLogo from "../assets/logo.svg";
import heroTitle from "../assets/copy-aura.svg";
import ctaIcon from "../assets/element-logo-aura.svg";
import ctaIconGreen from "../assets/element-logo-aura-green.svg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className={styles.main}>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <div className={styles.logoContainer}>
          <img src={navLogo} alt="Logo Aura" className={styles.logo} />
        </div>
        <div className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`} onClick={toggleMenu}>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </div>
      </nav>

      {/* Overlay do MENU */}

      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.menuNav}>
          <a href="#sobre" className={`${styles.menuLink} ${styles.menuLinkLeft}`}>
            <span className={styles.menuNumber}>/01</span>
            <span className={styles.menuText}>SOBRE NÓS</span>
          </a>
          <a href="#servicos" className={`${styles.menuLink} ${styles.menuLinkRight}`}>
            <span className={styles.menuNumber}>/02</span>
            <span className={styles.menuText}>SERVIÇOS</span>
          </a>
          <a href="#atletas" className={`${styles.menuLink} ${styles.menuLinkCenter}`}>
            <span className={styles.menuNumber}>/03</span>
            <span className={styles.menuText}>ATLETAS</span>
          </a>
        </nav>

        <div className={styles.menuFooter}>
          <p className={styles.copyright}>2026© TODOS OS DIREITOS RESERVADOS</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>[ Linkedin ]</a>
            <a href="#" className={styles.socialLink}>[ Instagram ]</a>
          </div>
          <div className={styles.footerCtaContainer}>
            <button className={styles.footerCta}>Fale conosco</button>
            <div className={styles.footerCtaIconWrapper}>
              <img src={ctaIconGreen} alt="" className={styles.footerCtaIcon} />
            </div>
          </div>
        </div>
      </div>

      <section className={styles.hero}>
        <img
          src={heroTitle}
          alt="the original sportellers"
          className={styles.heroTitle}
        />

        <div className={styles.textContent}>
          <div className={styles.contentBlock}>
            <p className={styles.subtitle}>
              {`Transformamos presença em marca.
Narrativas em valor.
Talentos em potência.`}
            </p>

            <div className={styles.ctaButtonContainer}>
              <button className={styles.ctaButton}>Conheça a AURA</button>
              <img src={ctaIcon} alt="" className={styles.ctaIcon} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
