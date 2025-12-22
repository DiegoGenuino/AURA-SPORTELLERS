import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import navLogo from "../assets/logo.svg";
import heroTitle from "../assets/copy-aura.svg";
import theOriginalText from "../assets/theoriginal-text.svg";
import sportellersText from "../assets/sportellers-text.svg";
import ctaIcon from "../assets/element-logo-aura.svg";
import ctaIconGreen from "../assets/element-logo-aura-green.svg";
import camisetaAura from "../assets/camiseta-aura.png";

// Media imports
import cardImg1 from "../assets/videosandphotos/photoUm.jpg";
import cardImg2 from "../assets/videosandphotos/photoDois.png";
import cardVideo1 from "../assets/videosandphotos/videoUm.webm";
import cardImg3 from "../assets/videosandphotos/photoTres.png";
import cardImg4 from "../assets/videosandphotos/photoQuatro.png";
import cardImg5 from "../assets/videosandphotos/photoCinco.jpg";
import cardImg6 from "../assets/videosandphotos/photoSeis.jpg";
import cardVideo2 from "../assets/videosandphotos/videoDois.webm";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const [parallaxOffsets, setParallaxOffsets] = useState({});
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Media items array com velocidades de parallax diferentes para cada card
  const mediaItems = [
    { type: "image", src: cardImg1, alt: "photo1", speed: 0.15 },
    { type: "video", src: cardVideo1, alt: "video1", speed: 0.12 },
    { type: "image", src: cardImg2, alt: "photo2", speed: 0.18 },
    { type: "image", src: cardImg3, alt: "photo3", speed: 0.26 },
    { type: "image", src: cardImg4, alt: "photo4", speed: 0.2 },
    { type: "video", src: cardVideo2, alt: "Vídeo 2", speed: 0.14 },
    { type: "image", src: cardImg5, alt: "photo5", speed: 0.16 },
    { type: "image", src: cardImg6, alt: "photo6", speed: 0.13 },
  ];

  // Scroll listener para cards aparecerem conforme scroll + parallax
  useEffect(() => {
    if (!cardsRef.current) return;

    const handleScroll = () => {
      const cards = cardsRef.current.querySelectorAll("[data-card]");
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const newOffsets = {};

      cards.forEach((card) => {
        const index = parseInt(card.dataset.index);
        const rect = card.getBoundingClientRect();
        const speed = mediaItems[index]?.speed || 0.15;

        // Card aparece quando o topo dele está 85% dentro da viewport
        const triggerPoint = windowHeight * 0.85;

        if (rect.top < triggerPoint && !visibleCards[index]) {
          setVisibleCards((prev) => ({ ...prev, [index]: true }));
        }

        // Calcular offset do parallax baseado na posição do card na tela
        // Quanto mais o card subiu na tela, maior o offset negativo (sobe mais)
        if (visibleCards[index]) {
          const cardTop = rect.top;
          const distanceFromBottom = windowHeight - cardTop;
          const parallaxOffset = distanceFromBottom * speed * -1;
          newOffsets[index] = parallaxOffset;
        }
      });

      setParallaxOffsets(newOffsets);
    };

    // Verificar posição inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  return (
    <main className={styles.main}>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <div className={styles.logoContainer}>
          <img src={navLogo} alt="Logo Aura" className={styles.logo} />
        </div>
        <div
          className={`${styles.menuIcon} ${
            menuOpen ? styles.menuIconOpen : ""
          }`}
          onClick={toggleMenu}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </div>
      </nav>

      {/* Overlay do MENU */}

      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <nav className={styles.menuNav}>
          <a
            href="#sobre"
            className={`${styles.menuLink} ${styles.menuLinkLeft}`}
          >
            <span className={styles.menuNumber}>/01</span>
            <span className={styles.menuText}>SOBRE NÓS</span>
          </a>
          <a
            href="#servicos"
            className={`${styles.menuLink} ${styles.menuLinkRight}`}
          >
            <span className={styles.menuNumber}>/02</span>
            <span className={styles.menuText}>SERVIÇOS</span>
          </a>
          <a
            href="#atletas"
            className={`${styles.menuLink} ${styles.menuLinkCenter}`}
          >
            <span className={styles.menuNumber}>/03</span>
            <span className={styles.menuText}>ATLETAS</span>
          </a>
        </nav>

        <div className={styles.menuFooter}>
          <p className={styles.copyright}>2026© TODOS OS DIREITOS RESERVADOS</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              [ Linkedin ]
            </a>
            <a href="#" className={styles.socialLink}>
              [ Instagram ]
            </a>
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
        <div className={styles.heroTitleMobile}>
          <img
            src={theOriginalText}
            alt="the original"
            className={styles.heroTextLine}
          />
          <img
            src={sportellersText}
            alt="sportellers"
            className={styles.heroTextLine}
          />
        </div>

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

      {/* Seção Stories */}
      <section className={styles.storiesSection}>
        {/* Header */}
        <div className={styles.storiesHeader}>
          <p className={styles.storiesKicker}>HISTÓRIAS QUE EMANAM.</p>
        </div>

        {/* Marquee de fundo */}
        <div className={styles.marqueeWrapper} aria-hidden="true">
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
            </div>
          </div>
          <div className={styles.marqueeRow}>
            <div className={`${styles.marqueeTrack} ${styles.marqueeReverse}`}>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
              <span>/ ISSO É AURA / ISSO É AURA / ISSO É AURA /</span>
            </div>
          </div>
        </div>

        {/* Camiseta showcase */}
        <div className={styles.jerseyShowcase}>
          <div className={styles.jerseyContainer}>
            <img src={camisetaAura} alt="Camiseta Aura" className={styles.jerseyImage} />
        
          </div>
        </div>

        {/* Conteúdo de texto - sticky */}
        <div className={styles.storiesContent}>
          <h2 className={styles.storiesTitle}>
            SEM EXCESSOS.
            <br />
            SEM MOLDES.
            <br />
            SÓ AUTENTICIDADE
            <br />E CONEXÃO.
          </h2>
          <p className={styles.storiesDescription}>
            AURA é a presença que o atleta projeta no mundo — sua energia, sua
            memória, seu impacto. Uma categoria que criamos para narrar o atleta
            como ele realmente é.
          </p>
        </div>

        {/* Cards de mídia */}
        <div className={styles.cardsContainer} ref={cardsRef}>
          {mediaItems.map((item, index) => (
            <div
              key={index}
              data-card
              data-index={index}
              className={`${styles.mediaCard} ${
                styles[`card${index + 1}`] || ""
              } ${visibleCards[index] ? styles.visible : ""}`}
              style={{
                transform: visibleCards[index]
                  ? `translateY(${parallaxOffsets[index] || 0}px)`
                  : undefined,
              }}
            >
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} loading="lazy" />
              ) : (
                <video src={item.src} muted loop autoPlay playsInline />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
