import { GitForkIcon } from "@phosphor-icons/react";
import { Bot, BriefcaseBusiness, Building2, Clock3, Crown, DollarSign, FileText, Gauge, Globe2, Home, Languages, Link2, LockKeyhole, Mail, MessageSquareText, Mic2, PhoneCall, Plus, Rocket, ShieldCheck, Users2, WandSparkles, Zap } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Atividade",
    href: "/how-it-works",
  },
  {
    label: "Recursos",
    href: "/features",
  },
  {
    label: "Preços",
    href: "/pricing",
  },
];

const navLinksMobile = [
  {
    id: "home",
    href: "/",
    icon: Home,
  },
  {
    id: "how_work",
    href: "/how-it-works",
    icon: BriefcaseBusiness 
  },
  {
    id: "create",
    href: "/rooms/create",
    icon: Plus
  },
  {
    id: "resources",
    href: "/features",
    icon: Gauge
  },
  {
    id: "prices",
    href: "/pricing",
    icon: DollarSign
  },
];

const steps = [
  {
    icon: Users2,
    title: "Crie uma sala",
    description:
      "Abra uma conversa e compartilhe o link com outra pessoa em poucos segundos.",
  },
  {
    icon: Mic2,
    title: "Fale no seu idioma",
    description:
      "Você fala naturalmente em português, inglês ou outro idioma configurado.",
  },
  {
    icon: Languages,
    title: "Receba a tradução",
    description:
      "A outra pessoa acompanha a conversa com legenda traduzida em tempo real.",
  },
];

const features = [
  {
    icon: MessageSquareText,
    title: "Legenda em tempo real",
    description:
      "Transforme fala em texto traduzido para manter a conversa fluindo sem travar.",
  },
  {
    icon: Clock3,
    title: "Baixa latência",
    description:
      "Pensado para conversas rápidas, com respostas visuais em poucos segundos.",
  },
  {
    icon: Bot,
    title: "IA contextual",
    description:
      "A tradução pode evoluir com contexto, termos técnicos e glossários por área.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade desde o início",
    description:
      "Estrutura pensada para proteger conversas, histórico e dados dos usuários.",
  },
];

const useCases = [
  "Freelancers falando com clientes internacionais",
  "Pequenas empresas atendendo estrangeiros",
  "Reuniões entre pessoas de países diferentes",
  "Entrevistas, suporte e apresentações em outro idioma",
];

const productLinks = [
  {
    label: "Como funciona",
    href: "/how-it-works",
  },
  {
    label: "Recursos",
    href: "/features",
  },
  {
    label: "Preços",
    href: "/pricing",
  },
  {
    label: "Criar sala",
    href: "/rooms/create",
  },
];

const companyLinks = [
  {
    label: "Sobre o BabelCall",
    href: "/about",
  },
  {
    label: "Contato",
    href: "/contact",
  },
  {
    label: "Privacidade",
    href: "/privacy",
  },
  {
    label: "Termos de uso",
    href: "/terms",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: GitForkIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Link2,
  },
  {
    label: "E-mail",
    href: "mailto:contato@babelcall.com",
    icon: Mail,
  },
];

const mainSteps = [
  {
    icon: Link2,
    title: "1. Crie uma sala",
    description:
      "O usuário cria uma sala no BabelCall e recebe um link único para compartilhar.",
  },
  {
    icon: Users2,
    title: "2. Convide outra pessoa",
    description:
      "A outra pessoa entra pelo link, escolhe o idioma que fala e o idioma que quer receber.",
  },
  {
    icon: Mic2,
    title: "3. Fale naturalmente",
    description:
      "Cada participante fala no próprio idioma, sem precisar digitar ou pausar a conversa toda hora.",
  },
  {
    icon: Languages,
    title: "4. A IA traduz",
    description:
      "O sistema transcreve a fala, traduz o texto e mostra a legenda no idioma correto.",
  },
];

const techFlow = [
  {
    icon: Mic2,
    title: "Áudio",
    description: "O navegador captura a fala pelo microfone.",
  },
  {
    icon: FileText,
    title: "Transcrição",
    description: "A fala é convertida em texto.",
  },
  {
    icon: Bot,
    title: "Tradução",
    description: "A IA traduz o conteúdo para o idioma escolhido.",
  },
  {
    icon: MessageSquareText,
    title: "Legenda",
    description: "A outra pessoa recebe a legenda traduzida na sala.",
  },
];

const mvpItems = [
  "Criar sala de conversa",
  "Compartilhar link da sala",
  "Escolher idioma de entrada e saída",
  "Capturar áudio pelo microfone",
  "Transcrever fala em texto",
  "Traduzir texto automaticamente",
  "Exibir legenda traduzida",
  "Mostrar histórico da conversa",
];

const futureItems = [
  "Voz traduzida em tempo real",
  "App mobile",
  "App desktop/PWA",
  "Resumo automático da conversa",
  "Glossário personalizado por área",
  "Integração com reuniões online",
  "Controle de minutos por plano",
  "Suporte para mais idiomas",
];

const differences = [
  {
    icon: Clock3,
    title: "Menos atraso",
    description:
      "O objetivo é reduzir a distância entre falar e entender, mantendo a conversa viva.",
  },
  {
    icon: Globe2,
    title: "Foco global",
    description:
      "A proposta é conectar pessoas de idiomas diferentes sem transformar a conversa em tradução manual.",
  },
  {
    icon: ShieldCheck,
    title: "Mais controle",
    description:
      "Salas, histórico, permissões e privacidade podem evoluir como base de um SaaS real.",
  },
];

const mainFeatures = [
  {
    icon: Mic2,
    title: "Captura de voz",
    description:
      "O usuário fala naturalmente pelo microfone, sem precisar digitar cada frase.",
  },
  {
    icon: FileText,
    title: "Transcrição automática",
    description:
      "A fala é transformada em texto para servir como base da tradução.",
  },
  {
    icon: Languages,
    title: "Tradução por IA",
    description:
      "O texto transcrito é traduzido para o idioma escolhido pelo participante.",
  },
  {
    icon: MessageSquareText,
    title: "Legenda em tempo real",
    description:
      "A tradução aparece na interface como legenda para manter a conversa fluindo.",
  },
  {
    icon: Users2,
    title: "Salas compartilháveis",
    description:
      "Cada conversa acontece dentro de uma sala acessada por link único.",
  },
  {
    icon: Clock3,
    title: "Histórico da conversa",
    description:
      "As mensagens traduzidas podem ser salvas para consulta, resumo e exportação.",
  },
];

const mvpFeatures = [
  "Criar sala por link",
  "Entrar em uma sala compartilhada",
  "Escolher idioma de entrada",
  "Escolher idioma de saída",
  "Enviar texto para tradução",
  "Capturar áudio pelo microfone",
  "Transcrever fala em texto",
  "Mostrar legenda traduzida",
  "Salvar histórico da conversa",
];

const futureFeatures = [
  {
    icon: PhoneCall,
    title: "Voz traduzida",
    description:
      "Gerar áudio traduzido para que a outra pessoa escute a conversa no idioma dela.",
  },
  {
    icon: Bot,
    title: "Resumo automático",
    description:
      "Criar resumos com pontos importantes, decisões e próximos passos da conversa.",
  },
  {
    icon: WandSparkles,
    title: "Glossário personalizado",
    description:
      "Manter termos técnicos, nomes de produtos e expressões do jeito certo para cada área.",
  },
  {
    icon: Globe2,
    title: "Mais idiomas",
    description:
      "Expandir de português, inglês e espanhol para outras línguas conforme validação real.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Menos atrito",
    description:
      "A conversa acontece dentro de uma sala, sem copiar texto de um lado para outro.",
  },
  {
    icon: ShieldCheck,
    title: "Base para SaaS",
    description:
      "A estrutura permite evoluir para login, planos, limites, histórico e times.",
  },
  {
    icon: LockKeyhole,
    title: "Privacidade como prioridade",
    description:
      "Conversas, históricos e dados podem ser tratados com regras claras desde o início.",
  },
];

const plans = [
  {
    name: "Free",
    description: "Para testar a ideia e criar suas primeiras salas.",
    price: "R$ 0",
    period: "/mês",
    icon: Rocket,
    badge: "Comece aqui",
    highlighted: false,
    cta: "Criar sala grátis",
    href: "/rooms/create",
    features: [
      "30 minutos de conversa por mês",
      "Tradução por legenda",
      "Português ↔ Inglês",
      "Salas compartilháveis por link",
      "Histórico limitado",
      "Acesso aos recursos básicos",
    ],
  },
  {
    name: "Pro",
    description: "Para freelancers, devs e profissionais falando com clientes.",
    price: "R$ 39",
    period: "/mês",
    icon: Crown,
    badge: "Mais indicado",
    highlighted: true,
    cta: "Começar no Pro",
    href: "/rooms/create",
    features: [
      "300 minutos de conversa por mês",
      "Tradução por legenda",
      "Português ↔ Inglês e Espanhol",
      "Histórico completo",
      "Resumo automático da conversa",
      "Exportação de conversa",
      "Prioridade em novos recursos",
    ],
  },
  {
    name: "Business",
    description: "Para equipes, atendimentos e pequenos negócios internacionais.",
    price: "Sob consulta",
    period: "",
    icon: Building2,
    badge: "Para empresas",
    highlighted: false,
    cta: "Falar com vendas",
    href: "/contact",
    features: [
      "Minutos personalizados",
      "Múltiplos usuários",
      "Glossário personalizado",
      "Histórico por equipe",
      "Relatórios de uso",
      "Suporte prioritário",
      "Recursos de privacidade avançados",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Criar salas por link",
    free: true,
    pro: true,
    business: true,
  },
  {
    feature: "Legenda traduzida",
    free: true,
    pro: true,
    business: true,
  },
  {
    feature: "Histórico da conversa",
    free: "Limitado",
    pro: true,
    business: true,
  },
  {
    feature: "Resumo automático",
    free: false,
    pro: true,
    business: true,
  },
  {
    feature: "Exportação de conversa",
    free: false,
    pro: true,
    business: true,
  },
  {
    feature: "Glossário personalizado",
    free: false,
    pro: false,
    business: true,
  },
  {
    feature: "Usuários em equipe",
    free: false,
    pro: false,
    business: true,
  },
];

const faqItems = [
  {
    question: "O BabelCall já traduz chamadas telefônicas comuns?",
    answer:
      "Não no MVP. A primeira versão será focada em salas próprias com tradução por legenda. Chamadas telefônicas reais ficam para uma fase mais avançada.",
  },
  {
    question: "Por que existe limite de minutos?",
    answer:
      "Porque transcrição, tradução e IA custam por uso. O limite evita que o produto vire uma fogueira de dinheiro com interface bonita.",
  },
  {
    question: "A voz traduzida entra quando?",
    answer:
      "Depois que a legenda em tempo real estiver sólida. Voz traduzida aumenta custo, latência e complexidade, então entra em uma fase posterior.",
  },
  {
    question: "Posso usar para falar com clientes estrangeiros?",
    answer:
      "Essa é exatamente uma das ideias principais: ajudar brasileiros a conversar melhor com clientes, parceiros e pessoas de outros países.",
  },
];

const languages = [
  {
    label: "Português",
    value: "pt-BR",
  },
  {
    label: "Inglês",
    value: "en-US",
  },
  {
    label: "Espanhol",
    value: "es-ES",
  },
  {
    label: "Francês",
    value: "fr-FR",
  },
  {
    label: "Alemão",
    value: "de-DE",
  },
];

const benefitsRoom = [
  "Sala criada por link único",
  "Idiomas definidos antes da conversa",
  "Base pronta para legenda traduzida",
  "Fluxo preparado para áudio e transcrição",
];


export {
  navLinks, 
  navLinksMobile, 
  steps, 
  features, 
  useCases, 
  productLinks, 
  companyLinks, 
  socialLinks, 
  mainSteps, 
  techFlow, 
  mvpItems, 
  futureItems, 
  differences, 
  mainFeatures, 
  mvpFeatures, 
  futureFeatures, 
  benefits,
  plans,
  comparisonRows,
  faqItems,
  languages,
  benefitsRoom
}