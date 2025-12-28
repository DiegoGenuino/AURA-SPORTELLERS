import styles from "./Team.module.css";
import auraLogoWithEffect from "../../assets/teamSection/logo-aura-with-effect.svg";

const Team = () => {
    return (
        <section className={styles.teamSection}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLeftContent}>
                    <h1 className={styles.containerLeftTitle}>
                        Nossa equipe
                    </h1>
                    <p className={styles.containerLeftParagraph}>
                        Nossa operação reúne profissionais que já trabalharam com atletas,
                        clubes, marcas e projetos esportivos em diferentes níveis
                        — branding, marketing, gestão de imagem, conteúdo, audiovisual e
                        estratégia cultural.
                    </p>
                </div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerRightContent}>
                    <p className={styles.containerRightText}>
                        Estética precisa.
                        <br />
                        Narrativa profunda.
                        <br />
                        Gestão inteligente.
                        <br />
                        A soma
                        que transforma identidade em valor.
                    </p>
                    <img
                        src={auraLogoWithEffect}
                        alt="Logo AURA"
                        className={styles.containerRightLogo}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
