/** biome-ignore-all assist/source/organizeImports: <> */
"use client";

import { navLinksMobile } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const pathname = usePathname()

  return (
    <div className="max-md:flex hidden px-3 fixed z-50 bottom-5 left-0 w-full bg-cover justify-center items-center gap-2">
      <div className="w-full py-2 bg-chart-2/5 backdrop-blur-xl border border-foreground/15 rounded-full mx-2"> 
        <ul className="flex place-items-center gap-2">
          {navLinksMobile.map((el) => {
            const Icon = el.icon;
    
            const isActive =
              el.href === "/"
                ? pathname === "/"
                : pathname.startsWith(el.href);
    
            const shouldNotTranslate = ["home"].includes(el.id);
            const CreateRoom = ["create"].includes(el.id)
    
            return (
              <li key={el.id} className="w-1/4">
                <Link
                  href={el.href}
                  translate={shouldNotTranslate ? "no" : "yes"}
                  className={`flex items-center justify-center transition`}
                >
                  <div className={`${CreateRoom ? "p-1.5 bg-sidebar-primary rounded-full" : ""}`}>
                    <Icon size={30} strokeWidth={1.8} className={`  ${isActive ? "text-sidebar-primary" : "text-foreground"}`} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
