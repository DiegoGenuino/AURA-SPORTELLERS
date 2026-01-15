import styles from "./Jersey.module.css";
import camisetaAura from "../../assets/camiseta-aura.png";
import IconAuraStories from "../../assets/stories-icon.svg";

const Jersey = () => {
  return (
    <section className={styles.jerseySection}>
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
            <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
            <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
            <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
            <span>THE ORIGINAL SPORTELLERS / THE ORIGINAL SPORTELLERS</span>
          </div>
        </div>
      </div>

      {/* Camiseta showcase */}
      <div className={styles.jerseyShowcase}>
        <div className={styles.jerseyContainer}>
          <img
            src={camisetaAura}
            alt="Camiseta Aura"
            className={styles.jerseyImage}
          />
          {/* <img
            src={IconAuraStories}
            alt="Icon Aura"
            className={styles.iconAuraStories}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Jersey;
