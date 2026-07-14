import { GitForkIcon } from "@phosphor-icons/react";
import { Bot, BriefcaseBusiness, Clock3, DollarSign, Gauge, Home, Languages, Link2, Mail, MessageSquareText, Mic2, Plus, ShieldCheck, Users2 } from "lucide-react";

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

export {navLinks, navLinksMobile, steps, features, useCases, productLinks, companyLinks, socialLinks}