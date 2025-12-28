import React from 'react';
import styles from './ContactFooter.module.css';

// Assets
import atletaBackground from '../../assets/finalSection/atleta-background.png';
import letreiroAura from '../../assets/finalSection/letreiro-aura.svg';
import auraIcon from '../../assets/finalSection/aura-icon.svg';
import sisuLogo from '../../assets/finalSection/sisu-logo.svg';

const ContactFooter = () => {
    return (
        <footer className={styles.footerSection} id="contact">
            {/* Top Image Section */}
            <div className={styles.imageContainer}>
                <img src={atletaBackground} alt="Athlete" className={styles.heroImage} />
                <div className={styles.overlayWrapper}>
                    <img src={letreiroAura} alt="AURA SPORTELLERS" className={styles.overlayText} />
                </div>
            </div>

            {/* Bottom Content Section */}
            <div className={styles.contentContainer}>
                {/* Background Wireframe Logo */}
                <div className={styles.bgLogoContainer}>
                    <img src={auraIcon} alt="" className={styles.bgLogo} />
                </div>

                <div className={styles.mainContent}>
                    {/* Left Column: Contact Info */}
                    <div className={styles.leftCol}>
                        <h3 className={styles.contactTitle}>Fale conosco</h3>

                        <div className={styles.contactLinks}>
                            <a href="tel:+5500000000000" className={styles.contactLink}>
                                +55 00 0 0000-0000
                            </a>
                            <a href="mailto:contato@aurasportellers.com" className={styles.contactLink}>
                                contato@aurasportellers.com
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Socials */}
                    <div className={styles.rightCol}>
                        <a href="https://linkedin.com" className={styles.socialLink} aria-label="Aura LinkedIn">[ Linkedin ]</a>
                        <a href="https://instagram.com" className={styles.socialLink} aria-label="Aura Instagram">[ Instagram ]</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <span className={styles.copyright}>2026© TODOS OS DIREITOS RESERVADOS</span>
                    <img src={sisuLogo} alt="SISU" className={styles.sisuLogo} />
                    <span className={styles.brandName}>AURA SPORTELLERS</span>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
