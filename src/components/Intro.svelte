<script>
    import Year from "./Year.svelte";
    import Content from "./content/Content.svelte";
    import Flyout from "./flyout/Flyout.svelte";

    import palette from "$style/_palette.scss?export";

    import { onMount } from "svelte";
    let language = "PT";
    onMount(() => {
        document.addEventListener("languageSwitch", ({detail}) => language = detail);
    });

    let title = {
        PT: "CURRÍCULO",
        EN: "CURRICULUM",
        FR: "CURRICULUM VITAE"
    }
    
    let declaration = [
        {
            content: {
                PT: "Estou em busca de uma oportunidade profissional que me proporcione uma jornada de aprendizado e desenvolvimento. Sou flexível, criativo, eficiente,  e me adapto facilmente a novos desafios e mudanças. Estou entusiasmado para aplicar minhas habilidades e embarcar nessa jornada em direção ao sucesso profissional!",
                EN: "I'm seeking a professional opportunity that offers a journey of learning and development. I am flexible, creative, efficient, and easily adapt to new challenges and changes. I'm excited to apply my skills and embark on this journey towards professional success!",
                FR: "Je suis a chercher d'un emploi 😊<br> J'apprends vite et je suis créatif.<br><br>(GPT)<br>Je suis à la recherche d'une opportunité professionnelle qui me permet de vivre une expérience d'apprentissage et de développement. Je suis flexible, créatif, efficace et m'adapte facilement aux nouveaux défis et aux changements. Je suis enthousiaste à l'idée d'appliquer mes compétences et d'entreprendre ce voyage vers le succès professionnel!",
            },
        },
    ];
    let diferentials = [
        {
            list: true,
            content: {
                PT: [
                    "Apaixonado por desafios",
                    "Rápida aprendizagem",
                    "Versátil e adaptável",
                    "Sincero e ético",
                    "Dedicado à organização",
                    "Comprometido com excelência e qualidade",
                    "Fluente em inglês",
                    "Francês Básico",
                    "Colaborativo e eficiente em trabalho em equipe",
                    "Criativo e inovador em soluções tecnológicas",
                    "Exímio em JavaScript",
                    "Forte expertise em Design",
                    "Experiência em scripts JSX para aplicativos Adobe",
                    "Experiência em desenvolvimento WEB e mobile",
                    "Experiência na criação de sistemas",
                    "Experiência em desenvolvimento com Arduino",
                ],
                EN: [
                    "Passionate about challenges",
                    "Quick learner",
                    "Versatile and adaptable",
                    "Honest and ethical",
                    "Dedicated to organization",
                    "Committed to excellence and quality",
                    "Fluent in English",
                    "Basic French",
                    "Collaborative and efficient in teamwork",
                    "Creative and innovative in technological solutions",
                    "Expert in JavaScript",
                    "Strong expertise in Design",
                    "Experience in JSX scripts for Adobe applications",
                    "Experience in WEB and mobile development",
                    "Experience in system creation",
                    "Experience in Arduino development"
                ],
                FR: [
                    "Passionné par les défis",
                    "Apprentissage rapide",
                    "Polyvalent et adaptable",
                    "Sincère et éthique",
                    "Dévoué à l'organisation",
                    "Engagé pour l'excellence et la qualité",
                    "Courant en anglais",
                    "Français de base",
                    "Collaboratif et efficace en travail d'équipe",
                    "Créatif et innovant dans les solutions technologiques",
                    "Expert en JavaScript",
                    "Forte expertise en Design",
                    "Expérience dans les scripts JSX pour les applications Adobe",
                    "Expérience en développement WEB et mobile",
                    "Expérience dans la création de systèmes",
                    "Expérience en développement avec Arduino"
                ],
            }
        },
    ];

    let titleDecraration = {
        PT: "DECLARAÇÃO PROFISSIONAL",
        EN: "PROFESSIONAL STATEMENT",
        FR: "DÉCLARATION PROFESSIONNELLE",
    }
    let titleDiferential = {        
        PT: "DIFERENCIAIS",
        EN: "DIFFERENTIATORS",
        FR: "DIFFÉRENTIATEURS",
    }

    
</script>

<div class="wrapper">
    <div class="flyout">
        <Flyout />
    </div>
    <div class="right">
        <div class="contentHeader">
            <div class="year">
                <Year> <span class="hidden">{title[language]}</span> 2024 </Year>
            </div>
            <h1 class="title">Luís Henrique de Almeida</h1>
        </div>
        <div class="content">
            <Content title={titleDecraration[language]} icon="Declaration" color={palette.primary} colorB={palette.highlight} content={declaration}/>
            <Content title={titleDiferential[language]} icon="Diferentials" color={palette.primary} colorB={palette.highlight} content={diferentials}/>
        </div>
    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;


    .contentHeader {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-family: robotoMono;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .year {
            margin-left: 20px;

            .hidden {
                display: none;
            }
        }
    }

    .wrapper {
        display: flex;
        justify-content: center;
        font-size: 30px;
        text-align: right;
        padding: 25px;

        max-width: 1940px;

        .right {
            width: 100%;
            max-width: 1300px;
        }
    }

    

    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        .contentHeader {
            flex-direction: column;
            margin-bottom: 50px;

            .title  {
                display: none;
            }

            .year {
                width: 100%;
                margin-left: 0;

                .hidden {
                    display: inline;
                }
            }
        }
        .wrapper {
            padding: 0;
            flex-direction: column;
            align-items: center;

            .flyout {
                margin-bottom: 10px;
            }
        }
    }
</style>