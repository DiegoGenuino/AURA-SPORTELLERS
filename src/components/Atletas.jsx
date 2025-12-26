import React, { useEffect, useRef, useState } from 'react';
import styles from './Atletas.module.css';

// Assets
import logoAtletas from '../assets/atletasSection/aura-logo-atletas-section.svg';
import iconBackground from '../assets/atletasSection/aura-icon-background-card.svg';
import johnKennedyImg from '../assets/atletasSection/john-kennedy-foto.png';
import brendaMouraImg from '../assets/atletasSection/brenda-moura-foto.png';
import agustinCanobbioImg from '../assets/atletasSection/Agustin Canobbio-foto.png';
import felipeAndradeImg from '../assets/atletasSection/felipe-andrade-foto.png';

const athletesData = [
    {
        name: "John Kennedy",
        role: "Jogador de futebol",
        image: johnKennedyImg,
        id: "john-kennedy",
        speed: 0.15
    },
    {
        name: "Brenda Moura",
        role: "Skatista",
        image: brendaMouraImg,
        id: "brenda-moura",
        speed: 0.2
    },
    {
        name: "Agustin Canobbio",
        role: "Jogador de futebol",
        image: agustinCanobbioImg,
        id: "agustin-canobbio",
        speed: 0.12
    },
    {
        name: "Felipe Andrade",
        role: "Jogador de futebol",
        image: felipeAndradeImg,
        id: "felipe-andrade",
        speed: 0.18
    }
];

const Atletas = () => {
    const [visibleCards, setVisibleCards] = useState({});
    const [parallaxOffsets, setParallaxOffsets] = useState({});
    const cardsRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        const handleScroll = () => {
            const cards = cardsRef.current.querySelectorAll("[data-card]");
            const windowHeight = window.innerHeight;

            const newOffsets = {};

            cards.forEach((card) => {
                const index = parseInt(card.dataset.index);
                const rect = card.getBoundingClientRect();
                const speed = athletesData[index]?.speed || 0.15;

                // Trigger visibility when top of card enters bottom 85% of viewport
                const triggerPoint = windowHeight * 0.85;

                if (rect.top < triggerPoint && !visibleCards[index]) {
                    setVisibleCards((prev) => ({ ...prev, [index]: true }));
                }

                // Parallax Offset Calculation
                if (visibleCards[index]) {
                    const cardTop = rect.top;
                    const distanceFromBottom = windowHeight - cardTop;
                    const parallaxOffset = distanceFromBottom * speed * -1;
                    newOffsets[index] = parallaxOffset;
                }
            });

            setParallaxOffsets(newOffsets);
        };

        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCards]);

    return (
        <section id="atletas" className={styles.atletasSection} ref={sectionRef}>
            {/* Sticky Header Wrapper */}
            <div className={styles.stickyWrapper}>
                <div className={styles.headerContainer}>
                    <p className={styles.kicker}>CADA ATLETA UMA</p>
                    <img src={logoAtletas} alt="AURA" className={styles.bigLogo} />
                    <p className={styles.description}>
                        Trabalhamos a presença de cada talento a
                        <br />
                        partir do que o torna único — sua história,
                        <br />
                        seu estilo, sua energia.
                    </p>
                </div>
            </div>

            <div className={styles.cardsContainer} ref={cardsRef}>
                {athletesData.map((athlete, index) => (
                    <div
                        key={athlete.id}
                        data-card
                        data-index={index}
                        className={`${styles.card} ${styles[`card${index + 1}`]} ${visibleCards[index] ? styles.visible : ''}`}
                        style={{
                            transform: visibleCards[index]
                                ? `translateY(${parallaxOffsets[index] || 0}px)`
                                : undefined
                        }}
                    >
                        {/* Background Icon */}
                        <img src={iconBackground} alt="" className={styles.cardBgIcon} />

                        {/* Player Image - Lowered via CSS */}
                        <img src={athlete.image} alt={athlete.name} className={styles.cardImage} />

                        <div className={styles.cardContent}>
                            <h3 className={styles.playerName}>{athlete.name}</h3>
                            <p className={styles.playerRole}>{athlete.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Atletas;
