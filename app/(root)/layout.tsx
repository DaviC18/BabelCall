/** biome-ignore-all assist/source/organizeImports: <> */
import { NavbarDesktop } from "@/components/NavbarDesktop";
import type { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main className="">
            <NavbarDesktop />
            {children}
        </main>
    )
}