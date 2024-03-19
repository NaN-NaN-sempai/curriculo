<script>
    import Content from "./content/Content.svelte";

    import palette from "$style/_palette.scss?export";
    import SplitScreen from "./SplitScreen.svelte";

    let works = [
        {
            title: "DESIGNER GRAFICO",
            type: "INFORMAL",
            time: "2021/2024",
            content: `
            Trabalhei na Inovar Personalizações como designer, criando designs exclusivos para encadernações e cartonados. Durante esse período, apliquei minhas habilidades de desenvolvedor ao introduzir uma nova metodologia para a criação dos designs e criando Scripts JSX para a Adobe, além de aprimorar o sistema de gestão de clientes e pedidos utilizado pela empresa.
            `,
        },
    ];
    let worksPlus = [
        {
            title: "PESQUISADOR",
            type: "CONTRATO",
            time: "1 mês -  2023",
            content: `
            Durante um mês, viajei por várias cidades da Bahia realizando pesquisas em nome da empresa UniFel.
            `,
        },
        {
            title: "ENTREGADOR DE PACOTES",
            type: "CONTRATO",
            time: "2 mêses -  2023",
            content: `
            Trabalhei como entregador na J&T Express, aprimorando habilidades organizacionais, eficiência na gestão de rotas e o cumprimento de metas. Responsável pela entrega pontual dos pacotes, mantive um alto padrão de desempenho.
            `,
        },
        {
            title: "FREELANCER",
            type: "INFORMAL",
            time: "PERIODICAMENTE",
            content: `
            Atuo como freelancer, oferecendo meus serviços tanto em programação quanto em design. Também dou aulas e tutoriais sobre a área.
            `,
        },
    ];
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title="EXPERIÊNCIA PROFISSIONAL"
            icon="Works"
            content={works}
            color={palette.secondary}/>
    </div>
    <div slot="right">
        <Content
            title="OUTROS"
            icon="Works"
            content={worksPlus}
            color={palette.primary}
            colorB={palette.highlight}
            plus/>
    </div>
</SplitScreen>