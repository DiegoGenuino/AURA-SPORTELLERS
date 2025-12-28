import styles from "./Hero.module.css";
import heroTitle from "../../assets/copy-aura.svg";
import ctaIcon from "../../assets/element-logo-aura.svg";
import letreiroHeroMobile from "../../assets/letreiro-hero-mobile.svg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
                AURA - The Original Sportellers
            </h1>
            <img
                src={heroTitle}
                alt="AURA - The Original Sportellers Logo"
                className={styles.heroTitle}
                fetchPriority="high"
                loading="eager"
                decoding="async"
            />
            <div className={styles.heroTitleMobile}>
                <img
                    src={letreiroHeroMobile}
                    alt="the original"
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
    );
};

export default Hero;
