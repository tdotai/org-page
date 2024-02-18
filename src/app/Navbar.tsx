import { Oswald } from "next/font/google";
import Link from "next/link";

export const oswald = Oswald({ subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav className="flex flex-auto px-12 py-6">
      <p className={oswald.className + " text-4xl"}>tdashai</p>
      <div className="flex flex-1 justify-center content-center">
        <NavButton>Home</NavButton>
        <NavButton>Our Projects</NavButton>
      </div>
    </nav>
  );
};

const NavButton = ({ children, href }: { children : React.ReactNode, href? : string }) => {
  return (
    <button className="p-4 text-lg">
      <Link href={href ?? "/"}>{children}</Link>
    </button>
  )
}
