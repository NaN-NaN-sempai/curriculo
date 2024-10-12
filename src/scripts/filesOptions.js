let fileColors = {
    html: '#e34c26',
    css: '#1572b6',
    scss: '#c6538c',
    sass: '#cf649a',
    js: '#f0db4f',
    ts: '#007acc',
    svelte: '#ff3e00',
    jsx: '#61dafb',
    tsx: '#61dafb',
    vue: '#41b883',
    json: '#292929',
    yaml: '#8a8a8a',
    md: '#333333',
    gitignore: '#f34f29',
    dockerfile: '#0db7ed',
    py: '#306998',
    java: '#5382a1',
    rb: '#cc342d',
    php: '#4f5d95',
    go: '#00add8',
    cpp: '#f34b7d',
    csharp: '#178600',
    c: '#555555',
    swift: '#ffac45',
    kotlin: '#4eabcf',
    shell: '#4e4e4e',
    perl: '#0298c3',
    rust: '#dea584',
    dart: '#00b4ab',
    scala: '#c22d40',
    groovy: '#4298b8',
    lua: '#000080',
    matlab: '#0076a8',
    r: '#198ce7',
    powershell: '#012456',
    clojure: '#5881d8',
    elixir: '#6e4a7e',
    julia: '#a270ba',
    vhdl: '#4c8cb5',
    verilog: '#b2b7f8',
    cobol: '#125685',
    fortran: '#4d4d4c',
    ada: '#02f88c',
    racket: '#3c5caa',
    ocaml: '#3be133',
    haskell: '#5e5086',
    fsharp: '#b845fc',
    sql: '#e38c00',
    graphql: '#e535ab',
    mongodb: '#47a248',
    couchdb: '#e9954e',
    redis: '#d82c20',
    firebase: '#ffcb2b'
};
let colors = [
    '#ff6262', '#62ff62', '#6262ff', '#ffff62', '#62ffff', // Cores claras
    '#ff7e7e', '#7eff7e', '#7e7eff', '#ffff7e', '#7effff',
    '#ff8c8c', '#8cff8c', '#8c8cff', '#ffff8c', '#8cffff',
    '#ff9b9b', '#9bff9b', '#9b9bff', '#ffff9b', '#9bffff',
    '#ffaaa', '#aaffaa', '#aaaaff', '#ffffaa', '#aaffff',
    '#ffbdbd', '#bdbdff', '#ffbdbd', '#ffffff', '#bdbdff',
    '#f5f5f5', '#e5e5e5', '#d5d5d5', '#c5c5c5', '#b5b5b5', // Tons de cinza
    '#a5a5a5', '#959595', '#858585', '#757575', '#656565',
    '#555555', '#454545', '#353535', '#252525', '#151515',
    '#05f5f5', '#05e5e5', '#05d5d5', '#05c5c5', '#05b5b5', // Tons de azul
    '#05a5a5', '#059595', '#058585', '#057575', '#056565',
    '#055555', '#054545', '#053535', '#052525', '#051515',
    '#00ff00', '#00ee00', '#00dd00', '#00cc00', '#00bb00', // Tons de verde
    '#00aa00', '#009900', '#008800', '#007700', '#006600',
    '#005500', '#004400', '#003300', '#002200', '#001100',
    '#ffcc00', '#eebb00', '#ddaa00', '#cc9900', '#bb8800', // Tons de amarelo
    '#aa7700', '#996600', '#885500', '#774400', '#663300',
    '#552200', '#441100', '#330000', '#220000', '#110000'
];
let fileDesc = {
    html: 'Linguagem de marcação para a construção de páginas web.',
    css: 'Linguagem para estilizar elementos HTML em páginas web.',
    scss: 'Extensão do CSS que adiciona funcionalidades como variáveis e aninhamento.',
    sass: 'Pré-processador CSS que simplifica a escrita de estilos.',
    js: 'Linguagem de programação amplamente utilizada para desenvolvimento web.',
    ts: 'Superset do JavaScript que adiciona tipagem estática.',
    svelte: 'Framework JavaScript para construção de interfaces de usuário eficientes.',
    jsx: 'Extensão do JavaScript para escrever código React.',
    tsx: 'Extensão do TypeScript para escrever código React.',
    vue: 'Framework JavaScript progressivo para construção de interfaces de usuário.',
    json: 'Formato de dados leve e independente de linguagem de programação.',
    yaml: 'Linguagem de serialização de dados de fácil leitura.',
    md: 'Linguagem de marcação para formatação de texto simples.',
    gitignore: 'Arquivo que especifica padrões de arquivos a serem ignorados pelo Git.',
    dockerfile: 'Script para construção de imagens de contêineres Docker.',
    py: 'Linguagem de programação de alto nível, interpretada e de propósito geral.',
    java: 'Linguagem de programação orientada a objetos amplamente utilizada.',
    rb: 'Linguagem de programação interpretada e orientada a objetos, conhecida como Ruby.',
    php: 'Linguagem de script do lado do servidor para desenvolvimento web.',
    go: 'Linguagem de programação compilada, concorrente e de código aberto.',
    cpp: 'Linguagem de programação de uso geral que é uma extensão do C.',
    csharp: 'Linguagem de programação moderna e orientada a objetos da Microsoft.',
    c: 'Linguagem de programação de baixo nível e procedural.',
    swift: 'Linguagem de programação desenvolvida pela Apple para iOS e macOS.',
    kotlin: 'Linguagem de programação moderna e concisa que roda na Máquina Virtual Java (JVM).',
    shell: 'Linguagem de script para automação de tarefas no sistema operacional.',
    perl: 'Linguagem de script usada para automação e processamento de texto.',
    rust: 'Linguagem de programação focada em segurança, desempenho e concorrência.',
    dart: 'Linguagem de programação desenvolvida pela Google para a criação de aplicativos.',
    scala: 'Linguagem de programação que combina programação orientada a objetos e funcional.',
    groovy: 'Linguagem de script dinâmica que roda na Máquina Virtual Java (JVM).',
    lua: 'Linguagem de script embeddable, leve e rápida.',
    matlab: 'Ambiente de programação para computação numérica e visualização de dados.',
    r: 'Linguagem de programação estatística e ambiente de software.',
    powershell: 'Shell de linha de comando e linguagem de script da Microsoft.',
    clojure: 'Lispe moderno que roda na Máquina Virtual Java (JVM).',
    elixir: 'Linguagem funcional concorrente projetada para construir aplicativos escaláveis.',
    julia: 'Linguagem de programação de alto desempenho para computação técnica e científica.',
    vhdl: 'Linguagem de descrição de hardware para design de circuitos digitais.',
    verilog: 'Linguagem de descrição de hardware usada para modelagem de circuitos digitais.',
    cobol: 'Linguagem de programação de negócios para processamento de dados empresariais.',
    fortran: 'Linguagem de programação de alto desempenho para computação científica.',
    ada: 'Linguagem de programação de propósito geral, especialmente usada em sistemas críticos.',
    racket: 'Linguagem de programação funcional e derivada do Scheme.',
    ocaml: 'Linguagem de programação funcional, modular e de tipagem estática.',
    haskell: 'Linguagem de programação funcional pura e de tipagem estática.',
    fsharp: 'Linguagem de programação funcional para a plataforma .NET.',
    sql: 'Linguagem de consulta estruturada para gerenciamento de bancos de dados.',
    graphql: 'Linguagem de consulta para APIs, fornecendo uma alternativa mais eficiente ao REST.',
    mongodb: 'Banco de dados NoSQL orientado a documentos.',
    couchdb: 'Banco de dados NoSQL que usa documentos JSON para armazenar dados.',
    redis: 'Banco de dados em memória de chave-valor.',
    firebase: 'Plataforma de desenvolvimento para criação de aplicativos móveis e web.'
};


export { fileColors, colors, fileDesc };
