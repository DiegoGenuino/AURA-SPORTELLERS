import React from "react";
import styles from "./ContactFooter.module.css";

// Assets
import letreiroAura from "../../assets/finalSection/letreiro-aura.svg";
import auraIcon from "../../assets/finalSection/aura-icon.svg";
import sisuLogo from "../../assets/finalSection/sisu-logo.png";

const ContactFooter = () => {
  return (
    <footer className={styles.footer} id="contact">
      {/* Hero Section com Letreiro */}
      <div className={styles.heroSection}>
        <img
          src={letreiroAura}
          alt="AURA SPORTELLERS"
          className={styles.heroLetreiro}
        />
      </div>

      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        {/* Background decorativo com arcos */}
        <div className={styles.bgDecoration}>
          <img
            src={auraIcon}
            alt=""
            className={styles.bgIcon}
            aria-hidden="true"
          />
        </div>

        {/* Container do conteúdo */}
        <div className={styles.footerContainer}>
          {/* Seção de Contato e Redes Sociais */}
          <div className={styles.footerContent}>
            <div className={styles.contactSection}>
              <h2 className={styles.contactTitle}>Fale conosco</h2>
              <div className={styles.contactInfo}>
                <a href="tel:+5500000000000" className={styles.contactLink}>
                  +55 00 0 0000-0000
                </a>
                <a
                  href="mailto:contato@aurasportellers.com"
                  className={styles.contactLink}
                >
                  contato@aurasportellers.com
                </a>
              </div>
            </div>

            <div className={styles.socialSection}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                [ Linkedin ]
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                [ Instagram ]
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              2026© TODOS OS DIREITOS RESERVADOS
            </p>
            <img src={sisuLogo} alt="SISU" className={styles.sisuLogo} />
            <p className={styles.brandName}>AURA SPORTELLERS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
