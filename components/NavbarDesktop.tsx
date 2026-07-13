/** biome-ignore-all assist/source/organizeImports: <> */
"use client";

import { navLinks } from "@/constants";
import { Menu, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import BabelCall from "../public/babellogo-1.png"

export function NavbarDesktop() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-muted-foreground/20 border-b bg-background backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[1580px] items-center justify-between px-3">
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

        <div className="flex place-items-center gap-3">
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

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-background px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActiveRoute(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-sidebar-primary text-foreground"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/room/create"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#00c850] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <PhoneCall size={17} />
              Criar sala
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}