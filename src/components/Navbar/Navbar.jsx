import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import navLogo from "../../assets/logo.svg";
import ctaIconGreen from "../../assets/element-logo-aura-green.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Bloquear scroll quando menu estiver aberto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                <div className={styles.logoContainer}>
                    <img src={navLogo} alt="Logo Aura" className={styles.logo} />
                </div>
                <div
                    className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                    role="button"
                >
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </div>
            </nav>

            {/* Overlay do MENU */}
            <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ""}`}>
                <nav className={styles.menuNav}>
                    <a
                        href="#sobre"
                        className={`${styles.menuLink} ${styles.menuLinkLeft}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={styles.menuNumber}>/01</span>
                        <span className={styles.menuText}>SOBRE NÓS</span>
                    </a>
                    <a
                        href="#servicos"
                        className={`${styles.menuLink} ${styles.menuLinkRight}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={styles.menuNumber}>/02</span>
                        <span className={styles.menuText}>SERVIÇOS</span>
                    </a>
                    <a
                        href="#atletas"
                        className={`${styles.menuLink} ${styles.menuLinkCenter}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={styles.menuNumber}>/03</span>
                        <span className={styles.menuText}>ATLETAS</span>
                    </a>
                </nav>

                <div className={styles.menuFooter}>
                    <p className={styles.copyright}>2026© TODOS OS DIREITOS RESERVADOS</p>
                    <div className={styles.socialLinks}>
                        <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn da Aura">
                            [ Linkedin ]
                        </a>
                        <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram da Aura">
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
        </>
    );
};

export default Navbar;
