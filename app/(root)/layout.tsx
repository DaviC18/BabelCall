/** biome-ignore-all assist/source/organizeImports: <> */
import { NavbarDesktop } from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import type { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main className="">
            <NavbarDesktop />
            <NavbarMobile />
            {children}
        </main>
    )
}