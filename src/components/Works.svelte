<script>
    import Content from "./content/Content.svelte";

    import palette from "$style/_palette.scss?export";
    import SplitScreen from "./SplitScreen.svelte";

    import { onMount } from "svelte";
    let language = "PT";
    onMount(() => {
        document.addEventListener("languageSwitch", ({detail}) => language = detail);
    });

    let works = [
        /* INOVAR */ {
            title: {
                PT: "DESIGNER GRÁFICO",
                EN: "GRAPHIC DESIGNER",
                FR: "DESIGNER GRAPHIQUE"
            },
            type: {
                PT: "INFORMAL",
                EN: "INFORMAL",
                FR: "INFORMEL"
            },
            time: "2021/2024",
            content: {
                PT: `
                Trabalhei na Inovar Personalizações como designer, criando designs exclusivos para encadernações e cartonados. Durante esse período, apliquei minhas habilidades de desenvolvedor ao introduzir uma nova metodologia para a criação dos designs e criando Scripts JSX para a Adobe, além de aprimorar o sistema de gestão de clientes e pedidos utilizado pela empresa.
                `,
                EN: `
                I worked at Inovar Personalizações as a graphic designer, creating unique designs for bindings and cardboard products. During this time, I applied my developer skills by introducing a new methodology for creating designs and creating JSX Scripts for Adobe, as well as improving the customer and order management system used by the company.
                `,
                FR: `
                J'ai travaillé chez Inovar Personalizações en tant que designer graphique, créant des designs uniques pour les reliures et les cartons. Pendant cette période, j'ai appliqué mes compétences de développeur en introduisant une nouvelle méthodologie pour la création des designs et en créant des Scripts JSX pour Adobe, ainsi qu'en améliorant le système de gestion des clients et des commandes utilisé par l'entreprise.
                `
            }
        },
    ];
    let worksPlus = [
        /* PESQUISADOR */ {
            title: {
                PT: "PESQUISADOR",
                EN: "RESEARCHER",
                FR: "CHERCHEUR"
            },
            type: {
                PT: "CONTRATO",
                EN: "CONTRACT",
                FR: "CONTRAT"
            },
            time: {
                PT: "1 mês - 2023",
                EN: "1 month - 2023",
                FR: "1 mois - 2023"
            },
            content: {
                PT: `
                Durante um mês, viajei por várias cidades da Bahia realizando pesquisas em nome da empresa UniFel.
                `,
                EN: `
                For one month, I traveled to several cities in Bahia, Brazil, conducting research on behalf of UniFel.
                `,
                FR: `
                Pendant un mois, j'ai voyagé dans plusieurs villes de Bahia, Bresil, pour effectuer des recherches au nom de l'entreprise UniFel.
                `
            }
        },
        /* ENTREGADOR */ {
            title: {
                PT: "ENTREGADOR DE PACOTES",
                EN: "PACKAGE DELIVERY DRIVER",
                FR: "LIVREUR DE COLIS"
            },
            type: {
                PT: "CONTRATO",
                EN: "CONTRACT",
                FR: "CONTRAT"
            },
            time: {
                PT: "2 meses - 2023",
                EN: "2 months - 2023",
                FR: "2 mois - 2023"
            },
            content: {
                PT: `
                Trabalhei como entregador na J&T Express, aprimorando habilidades organizacionais, eficiência na gestão de rotas e o cumprimento de metas. Responsável pela entrega pontual dos pacotes, mantive um alto padrão de desempenho.
                `,
                EN: `
                I worked as a delivery driver at J&T Express, improving organizational skills, route management efficiency, and meeting targets. Responsible for the timely delivery of packages, I maintained a high standard of performance.
                `,
                FR: `
                J'ai travaillé comme livreur chez J&T Express, améliorant mes compétences organisationnelles, l'efficacité dans la gestion des itinéraires et le respect des objectifs. Responsable de la livraison ponctuelle des colis, j'ai maintenu un haut niveau de performance.
                `
            }
        },
        /* FREELANCER */ {
            title: {
                PT: "FREELANCER",
                EN: "FREELANCER",
                FR: "FREELANCE"
            },
            type: {
                PT: "INFORMAL",
                EN: "INFORMAL",
                FR: "INFORMEL"
            },
            time: {
                PT: "PERIODICAMENTE",
                EN: "PERIODICALLY",
                FR: "PÉRIODIQUEMENT"
            },
            content: {
                PT: `
                Atuo como freelancer, oferecendo meus serviços tanto em programação quanto em design. Também dou aulas e tutoriais sobre a área.
                `,
                EN: `
                I work as a freelancer, offering my services in both programming and design. I also provide lessons and tutorials in the field.
                `,
                FR: `
                Je travaille en tant que freelance, offrant mes services en programmation et en design. Je donne également des cours et des tutoriels dans le domaine.
                `
            }
        },
    ];

    let titleWorks = {
        PT: "EXPERIÊNCIA PROFISSIONAL",
        EN: "PROFESSIONAL EXPERIENCE",
        FR: "EXPÉRIENCE PROFESSIONNELLE"
    };
    let titleWorks2 = {
        PT: "OUTROS",
        EN: "OTHERS",
        FR: "AUTRES"
    };
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title={titleWorks[language]}
            icon="Works"
            content={works}
            color={palette.secondary}/>
    </div>
    <div slot="right">
        <Content
            title={titleWorks2[language]}
            icon="Works"
            content={worksPlus}
            color={palette.primary}
            colorB={palette.highlight}
            plus/>
    </div>
</SplitScreen>