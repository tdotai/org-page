'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import { Oswald } from "next/font/google";
import Link from "next/link";

export const oswald = Oswald({ subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav className="flex flex-auto px-12 py-6 justify-center content-center gap-4">
      <Icon icon="ooui:vision-simulator" width="60px" height="60px" style={{border: "1px solid white", flexShrink: 0}}/>
      <p className={oswald.className} style={{fontSize: "24px"}}>tdashai</p>
      <div className="flex flex-1 justify-center content-center">
        <NavButton>Home</NavButton>
        <NavButton>Our Projects</NavButton>
      </div>
    </nav>
  );
};

const NavButton = ({ children, href }: { children : React.ReactNode, href? : string }) => {
  return (
    <button className="p-4 text-md">
      <Link href={href ?? "/"}>{children}</Link>
    </button>
  )
}
