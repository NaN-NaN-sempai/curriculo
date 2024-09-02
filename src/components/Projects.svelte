<script>
    import SingleContent from "./SingleContent.svelte";
    import Content from "./content/Content.svelte";
    
    import palette from "$style/_palette.scss?export";

    import { onMount } from "svelte";
    let language = "PT";
    onMount(() => {
        document.addEventListener("languageSwitch", ({detail}) => language = detail);
    });

    let projects = [
        /* PROJETOS */ {
            title: {
                PT: "Projetos Pessoais",
                EN: "Personal Projects",
                FR: "Projets Personnels"
            },
            type: {
                PT: "HOBBY",
                EN: "HOBBY",
                FR: "LOISIR"
            },
            time: {
                PT: "PERIODICAMENTE",
                EN: "OCCASIONALLY",
                FR: "PÉRIODIQUEMENT"
            },
            content: {
                PT: `
                Além destes projetos citados aqui, tenho uma ampla variedade de projetos disponíveis no meu perfil do GitHub: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou no meu site pessoal: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Meus projetos demonstram minha paixão por aprender e minha capacidade de criar soluções inovadoras por meio da programação.
                `,
                EN: `
                In addition to the projects mentioned here, I have a wide variety of projects available on my GitHub profile: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> or on my personal website: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. My projects showcase my passion for learning and my ability to create innovative solutions through programming.
                `,
                FR: `
                En plus des projets mentionnés ici, j'ai une grande variété de projets disponibles sur mon profil GitHub : <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou sur mon site personnel : <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Mes projets démontrent ma passion pour l'apprentissage et ma capacité à créer des solutions innovantes grâce à la programmation.
                `
            }
        },
        /* PDEF */ {
            title: "PDEF",
            type: {
                PT: "PROJETO ACADÊMICO",
                EN: "ACADEMIC PROJECT",
                FR: "PROJET ACADÉMIQUE"
            },
            time: "2021",
            content: {
                PT: `
                Plotador de Funções (PDEF), projeto requisitado durante a matéria de Aplicações Gráficas no IF Baiano. O PDEF é uma plataforma que permite a criação de gráficos usando JavaScript. Esse projeto se tornou uma ferramenta valiosa para visualizar e compreender conceitos gráficos, além de ser uma realização pessoal como programador. Pode ser acessado em: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `,
                EN: `
                Plotador de Funções - PDEF (Function Plotter), a project required during the Graphics Applications course at IF Baiano. PDEF is a platform that allows for the creation of graphs using JavaScript. This project has become a valuable tool for visualizing and understanding graphical concepts, as well as a personal achievement as a programmer. It can be accessed at: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `,
                FR: `
                Plotador de Funções - PDEF (Traceur de Fonctions), un projet requis lors du cours d'Applications Graphiques à l'IF Baiano. PDEF est une plateforme qui permet la création de graphiques en utilisant JavaScript. Ce projet est devenu un outil précieux pour visualiser et comprendre les concepts graphiques, ainsi qu'une réalisation personnelle en tant que programmeur. Il peut être consulté à l'adresse suivante : <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>
                `
            },
        },
        /* LICA APP */ {
            title: {
                PT: "Aplicativo LiCA App",
                EN: "LiCA App",
                FR: "Application LiCA"
            },
            type: {
                PT: "PROJETO ACADÊMICO",
                EN: "ACADEMIC PROJECT",
                FR: "PROJET ACADÉMIQUE"
            },
            time: "2021",
            content: {
                PT: `
                O LiCA App foi meu primeiro aplicativo para Android, desenvolvido com meu colega Joel Junior como parte da disciplina de Aplicações Gráficas no IF Baiano. Este aplicativo foi projetado para exibir a ementa do Curso de Licenciatura em Ciências Agrárias e esteve disponível no Google Play Store até 14/03/2024. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `,
                EN: `
                LiCA App was my first Android application, developed with my colleague Joel Junior as part of the Graphics Applications course at IF Baiano. This app was designed to display the syllabus of the Bachelor's Degree in Agricultural Sciences and was available on the Google Play Store until 03/14/2024. Available at: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `,
                FR: `
                LiCA App a été ma première application Android, développée avec mon collègue Joel Junior dans le cadre du cours d'Applications Graphiques à l'IF Baiano. Cette application était conçue pour afficher le programme du Diplôme de Licence en Sciences Agronomiques et était disponible sur le Google Play Store jusqu'au 14/03/2024. Disponible à : <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>
                `
            }
        },
        /* OFICINA */ {
            title: {
                PT: "Oficina Sobre Computação",
                EN: "Computing Workshop",
                FR: "Atelier sur l'Informatique"
            },
            type: {
                PT: "ESTÁGIO ACADÊMICO",
                EN: "ACADEMIC INTERNSHIP",
                FR: "STAGE ACADÉMIQUE"
            },
            time: "2022",
            content: {
                PT: `
                Na matéria Estágio I no IF Baiano, eu e meu colega Marcos Santos organizamos uma oficina online (devido à pandemia de COVID-19) de "Introdução à Computação", abordando tópicos como história da computação, hardware, software, redes, programação, desenvolvimento web e oportunidades de emprego. Algumas informações em: 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `,
                EN: `
                In the Internship I course at IF Baiano, my colleague Marcos Santos and I organized an online workshop (due to the COVID-19 pandemic) on "Introduction to Computing," covering topics such as the history of computing, hardware, software, networks, programming, web development, and job opportunities. More information at: 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `,
                FR: `
                Dans le cadre du stage I à l'IF Baiano, mon collègue Marcos Santos et moi avons organisé un atelier en ligne (en raison de la pandémie de COVID-19) sur "Introduction à l'Informatique", abordant des sujets tels que l'histoire de l'informatique, le matériel, les logiciels, les réseaux, la programmation, le développement web et les opportunités d'emploi. Plus d'informations sur : 
                <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>
                `
            }
        },
        /* ARTIGO */ {
            title: {
                PT: "Artigo Publicado",
                EN: "Published Article (In Portuguese)",
                FR: "Article Publié (En Portugais)"
            },
            type: {
                PT: "PROJETO ACADÊMICO",
                EN: "ACADEMIC PROJECT",
                FR: "PROJET ACADÉMIQUE"
            },
            time: "2022",
            content: {
                PT: `
                Participei do Programa Institucional de Bolsas de Iniciação à Docência (PIBID) trabalhando com o professor de física Damon Ferreira Farias, e juntamente com colegas, publiquei um artigo no Conedu sobre segurança da informação nas escolas. PDF disponível em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `,
                EN: `
                I participated in the Institutional Program for Teaching Initiation Scholarships (PIBID), working with physics professor Damon Ferreira Farias, and together with colleagues, published an article at Conedu on information security in schools. PDF available at: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `,
                FR: `
                J'ai participé au Programme Institutionnel de Bourses d'Initiation à l'Enseignement (PIBID) en travaillant avec le professeur de physique Damon Ferreira Farias, et avec des collègues, j'ai publié un article lors du Conedu sur la sécurité de l'information dans les écoles. PDF disponible sur : <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>
                `
            }
        },
        /* WINDOWS APP FOLDER */ {
            title: {
                PT: "Programa para Computador",
                EN: "Computer Program",
                FR: "Programme pour Ordinateur"
            },
            type: {
                PT: "HOBBY / NECESSIDADE PESSOAL",
                EN: "HOBBY / PERSONAL NEED",
                FR: "LOISIR / BESOIN PERSONNEL"
            },
            time: "2023",
            content: {
                PT: `
                O Windows App Folder é um aplicativo para Windows feito com Electron.js que cria pastas personalizadas para organizar aplicativos ou arquivos, inspirado nas pastas de aplicativos da Samsung no Android. Acesse: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `,
                EN: `
                The Windows App Folder is a Windows application created with Electron.js that creates custom folders to organize apps or files, inspired by Samsung's app folders on Android. Access it at: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `,
                FR: `
                Le Windows App Folder est une application pour Windows créée avec Electron.js qui permet de créer des dossiers personnalisés pour organiser des applications ou des fichiers, inspirée des dossiers d'applications de Samsung sur Android. Accédez-y à : <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>
                `
            }
        },
        /* USEBASE */ {
            title: "UseBase",
            type: {
                PT: "HOBBY / NECESSIDADE PESSOAL",
                EN: "HOBBY / PERSONAL NEED",
                FR: "LOISIR / BESOIN PERSONNEL"
            },
            time: "2023",
            content: {
                PT: `
                O UseBase é uma biblioteca JavaScript versátil projetada para simplificar o processo de codificação e decodificação de números usando várias bases numéricas. Seja para representar inteiros em binário, hexadecimal, conjuntos de caracteres personalizados ou até emojis, o UseBase oferece uma solução flexível. Disponível em <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `,
                EN: `
                UseBase is a versatile JavaScript library designed to simplify the process of encoding and decoding numbers using various numeric bases. Whether representing integers in binary, hexadecimal, custom character sets, or even emojis, UseBase provides a flexible solution. Available at <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `,
                FR: `
                UseBase est une bibliothèque JavaScript polyvalente conçue pour simplifier le processus de codage et de décodage de nombres en utilisant différentes bases numériques. Que ce soit pour représenter des entiers en binaire, hexadécimal, ensembles de caractères personnalisés ou même des emojis, UseBase offre une solution flexible. Disponible sur <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>
                `
            }
        },
    ];

    let projects2 = [
        /* MPJS */ {
            title: "MPJS",
            type: {
                PT: "Projeto pessoal",
                EN: "Personal Project",
                FR: "Projet Personnel"
            },
            time: {
                PT: "2023 / EM DESENVOLVIMENTO",
                EN: "2023 / IN DEVELOPMENT",
                FR: "2023 / EN DÉVELOPPEMENT"
            },
            content: {
                PT: `
                Math Plotter Javascript (MPJS) é uma evolução do PDEF, agora com uma interface aprimorada que incorpora o Monaco Editor e uma sintaxe de JavaScript mais avançada para criar gráficos complexos. Disponível em: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `,
                EN: `
                Math Plotter Javascript (MPJS) is an evolution of PDEF, now with an enhanced interface that incorporates the Monaco Editor and more advanced JavaScript syntax for creating complex graphs. Available at: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `,
                FR: `
                Math Plotter Javascript (MPJS) est une évolution du PDEF, maintenant avec une interface améliorée qui intègre l'éditeur Monaco et une syntaxe JavaScript plus avancée pour créer des graphiques complexes. Disponible sur : <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>
                `
            }
        },
    ];

    let titleProjects = {
        PT: "TRABALHOS E PROJETOS",
        EN: "WORK AND PROJECTS",
        FR: "TRAVAUX ET PROJETS"
    };
    let titleProjects2 = {
        PT: "PROJETOS EM DESENVOLVIMENTO",
        EN: "PROJECTS IN DEVELOPMENT",
        FR: "PROJETS EN DÉVELOPPEMENT"
    };
</script>


<SingleContent>
    <Content
        title={titleProjects[language]}
        icon="Projects"
        content={projects}
        color={palette.primary}
        colorB={palette.highlight}/>
    <Content
        title={titleProjects2[language]}
        plus
        icon="Projects"
        content={projects2}
        color={palette.primary}
        colorB={palette.highlight}/>
</SingleContent>