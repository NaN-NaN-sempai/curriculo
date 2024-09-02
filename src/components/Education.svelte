<script>
    import Content from "./content/Content.svelte";

    import palette from "$style/_palette.scss?export";
    import SplitScreen from "./SplitScreen.svelte";
    import { onMount } from "svelte";
    let language = "PT";
    onMount(() => {
        document.addEventListener("languageSwitch", ({detail}) => language = detail);
    });

    let formation = [
        /* CS50 */ {
            title: "CS50's Web Programming with Python and JavaScript",
            type: {
                PT: "TREINAMENTO ESPECIALIZADO",
                EN: "SPECIALIZED TRAINING",
                FR: "FORMATION SPÉCIALISÉE"
            },
            time: "2023",
            content: {
                PT: "Participei do curso disponibilizado por Harvard, onde aprofundei meus conhecimentos em programação web. Adquiri conceitos essenciais para desenvolver aplicativos web modernos e dinâmicos.",
                EN: "I participated in the course offered by Harvard, where I deepened my knowledge in web programming. I acquired essential concepts for developing modern and dynamic web applications.",
                FR: "J'ai participé au cours proposé par Harvard, où j'ai approfondi mes connaissances en programmation web. J'ai acquis des concepts essentiels pour développer des applications web modernes et dynamiques."
            },
        },
        /* LCI IF */ { 
            title: {
                PT: "Ciências da Computação",
                EN: "Computer Science",
                FR: "Sciences de l'Informatique",
            },
            type: {
                PT: "ENSINO SUPERIOR - INCOMPLETO",
                EN: "UNDERGRADUATE - INCOMPLETE",
                FR: "SUPÉRIEUR - INCOMPLET"
            },
            time: "2019/2023",
            content: {
                PT: "Consolidei ainda mais meu conhecimento de programação e tecnologia durante o curso de Licenciatura no IF Baiano - Sr. do Bonfim, Bahia, Brasil, onde coloquei em prática a maioria dos meus projetos.",
                EN: "I further consolidated my knowledge in programming and technology during the Bachelor's course at IF Baiano - Sr. do Bonfim, Bahia, Brazil, where I put most of my projects into practice.",
                FR: "J'ai encore renforcé mes connaissances en programmation et en technologie pendant le cours de Licence à l'IF Baiano - Sr. do Bonfim, Bahia, Brésil, où j'ai mis en pratique la plupart de mes projets."
            },
        },
        /* SENAI */ {
            title: {
                PT: "Suporte Técnico em TI",
                EN: "IT Technical Support",
                FR: "Support Technique en TI"
            },
            type: {
                PT: "CURSO PROFISSIONALIZANTE",
                EN: "PROFESSIONAL COURSE",
                FR: "COURS PROFESSIONNALISANT"
            },
            time: "2017/2018",
            content: {
                PT: "Iniciei minha carreira acadêmica com um curso de Suporte Técnico em TI no SENAI Cetind em Lauro de Freitas, Bahia, Brasil, obtendo uma base sólida sobre redes, programação, suporte técnico e outros assuntos, fortalecendo minha paixão pela área.",
                EN: "I began my academic career with a Technical Support course at SENAI Cetind in Lauro de Freitas, Bahia, Brazil, gaining a solid foundation in networks, programming, technical support, and other areas, strengthening my passion for the field.",
                FR: "J'ai commencé ma carrière académique avec un cours de Support Technique au SENAI Cetind à Lauro de Freitas, Bahia, Brésil, obtenant une base solide en réseaux, programmation, support technique et autres domaines, renforçant ma passion pour le secteur."
            },
        },
    ];
    let formationPlus = [
        /* LGPD */ {
            title: "LGPD",
            type: {
                PT: "CURSO PROFISSIONALIZANTE",
                EN: "PROFESSIONAL COURSE",
                FR: "COURS PROFESSIONNEL"
            },
            time: {
                PT: "4 horas - 2021",
                EN: "4 hours - 2021",
                FR: "4 heures - 2021"
            },
            content: {
                PT: `Fiz um curso online no SENAI São Paulo, Brasil, sobre "Privacidade e Proteção de Dados", aprendendo sobre segurança de informações e regulamentações de privacidade.`,
                EN: `I completed an online course at SENAI São Paulo, Brazil, on "Privacy and Data Protection," learning about information security and privacy regulations.`,
                FR: `J'ai suivi un cours en ligne au SENAI São Paulo, Brésil, sur "La Vie Privée et la Protection des Données", apprenant sur la sécurité des informations et les réglementations en matière de confidentialité.`
            },
        },
        /* LOGICA DE PROGRAMAÇAO */ {
            title: {
                PT: "Competências Transversais em Lógica de Programação",
                EN: "Transversal Competencies in Programming Logic",
                FR: "Compétences Transversales en Logique de Programmation"
            },
            type: {
                PT: "CURSO PROFISSIONALIZANTE",
                EN: "PROFESSIONAL COURSE",
                FR: "COURS PROFESSIONNEL"
            },
            time: {
                PT: "14 horas - 2017",
                EN: "14 hours - 2017",
                FR: "14 heures - 2017"
            },
            content: {
                PT: "Cursei a distância no SENAI Bahia, Brasil, o curso de Lógica de Programação, adquirindo fundamentos em programação e lógica.",
                EN: "I completed an online Programming Logic course at SENAI Bahia, Brazil, gaining fundamentals in programming and logic.",
                FR: "J'ai suivi à distance le cours de Logique de Programmation au SENAI Bahia, Brésil, acquérant des bases en programmation et en logique."
            }
        },
        /* EMPREENDEDORISMO */ {
            title: {
                PT: "Competências Transversais em Empreendedorismo",
                EN: "Transversal Competencies in Entrepreneurship",
                FR: "Compétences Transversales en Entrepreneuriat"
            },
            type: {
                PT: "CURSO PROFISSIONALIZANTE",
                EN: "PROFESSIONAL COURSE",
                FR: "COURS PROFESSIONNEL"
            },
            time: {
                PT: "14 horas - 2017",
                EN: "14 hours - 2017",
                FR: "14 heures - 2017"
            },
            content: {
                PT: "Fiz um curso a distância no SENAI Bahia, Brasil, sobre Empreendedorismo, adquirindo habilidades essenciais relacionadas ao empreendedorismo e à gestão de negócios.",
                EN: "I completed an online Entrepreneurship course at SENAI Bahia, Brazil, acquiring essential skills related to entrepreneurship and business management.",
                FR: "J'ai suivi un cours à distance sur l'Entrepreneuriat au SENAI Bahia, Brésil, acquérant des compétences essentielles liées à l'entrepreneuriat et à la gestion des affaires."
            }
        }
    ];
    
    let education = {
        PT: "FORMAÇÃO ACADÊMICA",
        EN: "ACADEMIC BACKGROUND",
        FR: "FORMATION ACADÉMIQUE"
    }
    let education2 = {
        PT: "CURSOS COMPLEMENTARES",
        EN: "SUPPLEMENTARY COURSES",
        FR: "COURS COMPLÉMENTAIRES"
    }
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title={education[language]}
            icon="Education"
            content={formation}
            color={palette.secondary}/>
    </div>
    <div slot="right">
        <Content
            title={education2[language]}
            icon="Education"
            content={formationPlus}
            color={palette.primary}
            colorB={palette.highlight}
            plus/>
    </div>
</SplitScreen>