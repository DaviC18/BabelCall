/** biome-ignore-all assist/source/organizeImports: <> */
"use client"

import { companyLinks, productLinks, socialLinks } from "@/constants";
import {
  Languages,
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import BabelCall from "../public/babellogo-1.png"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background md:pb-0 pb-10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div className="flex flex-col md:justify-start justify-center">
            <Link href="/" className="inline-flex items-center gap-3 md:justify-start justify-center">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-chart-2 text-slate-950 shadow-lg shadow-sidebar-primary/20">
                <Image src={BabelCall} height={44} alt="Logo" className="px-1"/>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">
                  BabelCall
                </span>
                <span className="text-xs text-muted-foreground">
                  Real-time translation calls
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 md:text-start text-center text-muted-foreground">
              Chamadas e conversas com tradução por legenda em tempo real.
              Fale no seu idioma, compartilhe uma sala e seja entendido por
              pessoas do mundo inteiro.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:justify-start justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
                <PhoneCall className="size-4 text-primary" />
                Salas de conversa
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">
                <Languages className="size-4 text-primary" />
                Tradução ao vivo
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Produto
            </h3>

            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Empresa
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Conecte-se
            </h3>

            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="size-4" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BabelCall. Todos os direitos
            reservados.
          </p>

          <p>
            Construído para derrubar barreiras de idioma.
          </p>
        </div>
      </div>
    </footer>
  );
}