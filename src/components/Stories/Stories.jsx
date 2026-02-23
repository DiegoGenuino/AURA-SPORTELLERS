import { useRef, useState, useEffect } from "react";
import styles from "./Stories.module.css";

// Media imports
import cardImg1 from "../../assets/videosandphotos/photoUm.webp";
import cardImg2 from "../../assets/videosandphotos/photoDois.webp";
import cardVideo1 from "../../assets/videosandphotos/videoUm.webm";

import cardImg4 from "../../assets/videosandphotos/photoQuatro.webp";

import cardImg6 from "../../assets/videosandphotos/photoSeis.webp";

import CardImg7 from "../../assets/atletasSection/akilles-lemiska.webp";

const Stories = () => {
  // Media items array com velocidades de parallax diferentes para cada card
  const mediaItems = [
    { type: "image", src: cardImg1, alt: "photo1", speed: 0.15 },
    { type: "video", src: cardVideo1, alt: "video1", speed: 0.12 },
    { type: "image", src: cardImg2, alt: "photo2", speed: 0.18 },
   
    { type: "image", src: cardImg4, alt: "photo4", speed: 0.2 },
    { type: "image", src: CardImg7, alt: "photo7", speed: 0.14 },

    { type: "image", src: cardImg6, alt: "photo6", speed: 0.13 },
  ];

  // Inicializa todos os cards como visíveis
  const [visibleCards, setVisibleCards] = useState(
    mediaItems.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {}),
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
      {/* Conteúdo de texto - sticky */}
      <div className={styles.storiesContent}>
        {/* Header */}
        <div className={styles.storiesHeader}>
          <p className={styles.storiesKicker}>HISTÓRIAS QUE EMANAM.</p>
        </div>

        <h2 className={styles.storiesTitle}>
          CONEXÕES COM ESTRATÉGIA.
          NARRATIVAS COM PROPÓSITO.
       
          PARCERIAS COM VISÃO DE
         
          LONGO PRAZO.
        </h2>
        <p className={styles.storiesDescription}>
          A AURA é uma agência de gestão estratégica de imagem e endorsement
          esportivo. Conectamos atletas e marcas a partir de narrativa e
          posicionamento.
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
