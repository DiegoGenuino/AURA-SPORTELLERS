import bgVideo from "../assets/videosandphotos/backgroundvideo-services-section.webm";
import styles from "./Services.module.css";

const servicesList = [
    {
        number: "01",
        title: "MAPEAMENTO & DIAGNÓSTICO",
        description:
            "Lemos a trajetória, identificamos diferenciais, analisamos presença digital e mapeamos oportunidades de posicionamento. É o início da narrativa, onde entendemos quem o atleta é — e quem ele pode ser.",
    },
    {
        number: "02",
        title: "POSICIONAMENTO & NARRATIVA",
        description:
            "Damos forma à aura: criamos discursos, estéticas, comportamentos e códigos visuais que consolidam a marca pessoal do atleta e o colocam onde deve estar — no seu próprio território.",
    },
    {
        number: "03",
        title: "CAPTAÇÃO DE PATROCÍNIOS",
        description:
            "Aproximamos marcas que conversam com a essência do atleta. Construímos propostas, estratégias e apresentações que valorizam sua história e ampliam seu alcance comercial.",
    },
    {
        number: "04",
        title: "NEGOCIAÇÃO & CONTRATOS",
        description:
            "Gerimos o processo com rigor técnico e visão estratégica, garantindo acordos inteligentes e alinhados à imagem projetada.",
    },
    {
        number: "05",
        title: "ATIVAÇÕES & RELATÓRIOS",
        description:
            "Acompanhamos todas as entregas, medimos impacto e traduzimos performance em valor. Cada ação é pensada para fortalecer a presença do atleta dentro e fora do jogo.",
    },
];

const Services = () => {
    return (
        <section id="servicos" className={styles.servicesSection}>
            {/* Background Video */}
            <div className={styles.videoContainer}>
                <video src={bgVideo} autoPlay muted loop playsInline className={styles.bgVideo} />
            </div>

            {/* Header Container - Split for Selective Knockout */}
            <div className={styles.stickyHeaderWrapper}>
                <div className={styles.labelSection}>
                    <div className={styles.topLabel}>NOSSOS SERVIÇOS</div>
                </div>

                <div className={styles.titleSection}>
                    <div className={styles.titleWrapper}>
                        {/* Mobile layout might need different structure, handling via CSS */}
                        <h2 className={styles.bigTitle}>
                            <div className={styles.line1}>CONECTAMOS</div>
                            <div className={styles.line2}>ATLETAS E MARCAS</div>
                            <div className={styles.line3}>QUE COMPARTILHAM</div>
                            <div className={styles.line4}>
                                <span>DA MESMA</span>
                                <span className={styles.auraText}>«AURA.</span>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className={styles.listContainer}>
                {servicesList.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.serviceMeta}>
                            <span className={styles.serviceNumber}>{service.number}</span>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </div>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
