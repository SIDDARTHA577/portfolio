"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { links } from "./config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000] !bg-transparent backdrop-blur-sm"
      )}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between px-6")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md font-bold text-lg">
            {config.author}
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                {link.title}
              </Button>
            </Link>
          ))}
          <FunnyThemeToggle className="w-6 h-6 ml-4" />
        </nav>

        {/* Mobile View - minimal or keep specific mobile menu if needed, 
            but user asked to remove "Menu" option. 
            For now, showing just theme toggle on mobile or keeping it simple. 
            If mobile menu is strictly needed, we might need a simpler solution than the complex one removed.
            For this request, I will just show theme toggle on mobile and hide nav links.
        */}
        <div className="flex md:hidden items-center gap-4">
          <FunnyThemeToggle className="w-6 h-6" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
