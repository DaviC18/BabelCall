/** biome-ignore-all assist/source/organizeImports: <> */
"use client";

import { navLinks } from "@/constants";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import BabelCall from "../public/babellogo-1.png"

export function NavbarDesktop() {
  const pathname = usePathname();

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-muted-foreground/20 border-b bg-background backdrop-blur-xl">
      <nav className="mx-auto flex h-20 container items-center justify-between px-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-chart-2 text-slate-950 shadow-lg shadow-cyan-400/20">
           <Image src={BabelCall} height={44} alt="Logo" className="px-1"/>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground">
              BabelCall
            </span>
            <span className="text-xs text-muted-foreground">
              Real-time translation
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActiveRoute(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-sidebar-primary"
                    : "text-foreground hover:text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex md:place-items-center justify-end items-center gap-3">
          <div className="">
            <ModeToggle />
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/room/create"
              className="inline-flex items-center gap-2 rounded-full bg-chart-2 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-chart-1"
            >
              <PhoneCall size={17} />
              Criar sala
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}