"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Link href="/">
        <h1 className="text-lg sm:text-lg  font-bold uppercase">
          <span className="text-accent/80">Sameer</span> Events
        </h1>
      </Link>
      <nav className="h-full">
        <ul className="flex items-center space-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(" hover:text-white relative transition", {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathname === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
