import NavbarDesktop from "@/components/NavbarDesktop";
import type { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main>
            <NavbarDesktop />
            {children}
        </main>
    )
}