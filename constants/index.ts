import { GitForkIcon } from "@phosphor-icons/react";
import { Bot, BriefcaseBusiness, Clock3, DollarSign, FileText, Gauge, Globe2, Home, Languages, Link2, Mail, MessageSquareText, Mic2, Plus, ShieldCheck, Users2 } from "lucide-react";

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
    href: "/room/create",
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
    href: "/room/create",
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

export {navLinks, navLinksMobile, steps, features, useCases, productLinks, companyLinks, socialLinks, mainSteps, techFlow, mvpItems, futureItems, differences}