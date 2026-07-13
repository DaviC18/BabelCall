import { BriefcaseBusiness, DollarSign, Gauge, Home, Plus } from "lucide-react";

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

export {navLinks, navLinksMobile}