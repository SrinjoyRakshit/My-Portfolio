"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link>
        <Link href={"#about"}>
            <MenuItem setActive={setActive} active={active} item="About Me">
            </MenuItem>
        </Link>
        <Link href={"/projects"}>
            <MenuItem setActive={setActive} active={active} item="Projects">
            </MenuItem>
        </Link>
        <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="https://github.com/SrinjoyRakshit">Github</HoveredLink>
                    <HoveredLink href="https://www.linkedin.com/in/srinjoy-rakshit-6a814b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</HoveredLink>
                    <HoveredLink href="@srinjoyrakshit2003@gmail.com">Email</HoveredLink>
                </div>
            </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
