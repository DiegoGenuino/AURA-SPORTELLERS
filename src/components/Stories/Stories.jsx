import { useRef, useState, useEffect } from "react";
import styles from "./Stories.module.css";

// Media imports
import cardImg1 from "../../assets/videosandphotos/photoUm.webp";
import cardImg2 from "../../assets/videosandphotos/photoDois.webp";
import cardVideo1 from "../../assets/videosandphotos/videoUm.webm";
import cardImg3 from "../../assets/videosandphotos/photoTres.webp";
import cardImg4 from "../../assets/videosandphotos/photoQuatro.webp";
import cardImg5 from "../../assets/videosandphotos/photoCinco.jpg";
import cardImg6 from "../../assets/videosandphotos/photoSeis.webp";
import cardVideo2 from "../../assets/videosandphotos/videoDois.webm";

const Stories = () => {
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

  // Inicializa todos os cards como visíveis
  const [visibleCards, setVisibleCards] = useState(
    mediaItems.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );
  const [parallaxOffsets, setParallaxOffsets] = useState({});
  const cardsRef = useRef(null);

  // Scroll listener apenas para parallax
  useEffect(() => {
    if (!cardsRef.current) return;

    const handleScroll = () => {
      const cards = cardsRef.current.querySelectorAll("[data-card]");
      const windowHeight = window.innerHeight;

      const newOffsets = {};

      cards.forEach((card) => {
        const index = parseInt(card.dataset.index);
        const rect = card.getBoundingClientRect();
        const speed = mediaItems[index]?.speed || 0.15;

        // Parallax Offset Calculation
        const cardTop = rect.top;
        const distanceFromBottom = windowHeight - cardTop;
        const parallaxOffset = distanceFromBottom * speed * -1;
        newOffsets[index] = parallaxOffset;
      });

      setParallaxOffsets(newOffsets);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.storiesSection}>
      {/* <div className="jersey-section">
            Marquee de fundo
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
                        <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
                        <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
                        <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
                        <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
                    </div>
                </div>
            </div>

            Camiseta showcase
            <div className={styles.jerseyShowcase}>
                <div className={styles.jerseyContainer}>
                    <img
                        src={camisetaAura}
                        alt="Camiseta Aura"
                        className={styles.jerseyImage}
                    />
                    <img
                        src={IconAuraStories}
                        alt="Icon Aura"
                        className={styles.iconAuraStories}
                    />
                </div>
            </div>
            </div> */}

      {/* Conteúdo de texto - sticky */}
      <div className={styles.storiesContent}>
        {/* Header */}
        <div className={styles.storiesHeader}>
          <p className={styles.storiesKicker}>HISTÓRIAS QUE EMANAM.</p>
        </div>

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
  );
};

export default Stories;
