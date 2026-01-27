import { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import responsive from "./About.responsive.module.css";
import aboutImage from "../../assets/videosandphotos/about-image.svg";
import sisuLogo from "../../assets/logos/sisu-logo.png";
import goldenGoalLogo from "../../assets/logos/goldengoal-logo.svg";
import fengLogo from "../../assets/logos/feng-logo.svg";
import sportInsiderLogo from "../../assets/logos/sportinsider-logo.svg";
import tinmoLogo from "../../assets/logos/tinmo-logo.svg";
import quartamLogo from "../../assets/logos/quartam-logo.png";

const About = () => {
    const [parallaxY, setParallaxY] = useState(0);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = sectionRef.current;
            const aboutContent = contentRef.current;

            if (!aboutSection || !aboutContent) return;

            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Para animação que acontece só uma vez:
            if (
                rect.top <= windowHeight * 0.1 &&
                !aboutContent.classList.contains(styles.contentVisible)
            ) {
                aboutContent.classList.add(styles.contentVisible);
            }

            if (rect.top < windowHeight && rect.bottom > 0) {
                const imageProgress = Math.min(
                    1,
                    Math.max(0, 1 - rect.top / windowHeight)
                );
                setParallaxY(-imageProgress * 80);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="sobre" className={`${styles.aboutSection} ${responsive.aboutSection}`} ref={sectionRef}>
            <div className={`${styles.aboutContent} ${responsive.aboutContent}`} ref={contentRef}>
                <div className={`${styles.aboutText} ${responsive.aboutText}`}>
                    <div className={`${styles.aboutTitle} ${responsive.aboutTitle}`}>
                        <span className={`${styles.aboutKicker} ${responsive.aboutKicker}`}>QUEM SOMOS</span>
                        <h2 className={`${styles.aboutTitleText} ${responsive.aboutTitleText}`}>
                            Uma visão.
                            <br />
                            Múltiplas
                            <br />
                            expertises.
                        </h2>
                    </div>
                    <p className={`${styles.aboutDescription} ${responsive.aboutDescription}`}>
                       A Aura Sportellers faz parte do grupo SISU Ventures, plataforma de investimentos e desenvolvimento de negócios com atuação nos mercados de esporte, entretenimento e mídia. Com mais de 20 anos de experiência, a SISU combina visão estratégica, profundo conhecimento de mercado e uma rede de relacionamentos consolidada para identificar ativos com potencial de geração de valor e resultados sustentáveis.
                    </p>
                </div>
                <div className={`${styles.aboutImageParallax} ${responsive.aboutImageParallax}`}>
                    <img
                        src={aboutImage}
                        alt="Atleta"
                        className={`${styles.aboutImage} ${responsive.aboutImage}`}
                        style={{ transform: `translateY(${parallaxY}px)` }}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className={`${styles.aboutLogosContainer} ${responsive.aboutLogosContainer}`}>
                    <div className={`${styles.sisuLogo} ${responsive.sisuLogo}`}>
                        <img src={sisuLogo} alt="SISU Ventures" />
                    </div>
                    <div className={`${styles.aboutLogos} ${responsive.aboutLogos}`}>
                        <img src={goldenGoalLogo} alt="Golden Goal" />
                        <img src={fengLogo} alt="Feng" />
                        <img src={sportInsiderLogo} alt="Sport Insider" />
                        <img src={tinmoLogo} alt="Tinmo" />
                        <img src={quartamLogo} alt="Quartam" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
