"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home as HomeIcon, User, Code, ToolCase, Mail } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Me", href: "/me", icon: User },
    { name: "Projects", href: "/projects", icon: Code },
    { name: "Skills", href: "/skills", icon: ToolCase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="items-center gap-6 z-50 flex md:left-auto md:top-1/2 md:right-8 md:-translate-y-1/2 md:translate-x-0 md:flex-col fixed left-1/2 top-4 -translate-x-1/2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <button
            key={item.name}
            onClick={() => router.push(item.href)}
            className="relative group focus:outline-none cursor-pointer"
          >
            {/* Circle */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? "bg-gradient-to-br from-cyan-400 to-purple-500 scale-110 shadow-lg"
                  : "bg-gray-700 group-hover:bg-cyan-500"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-gray-300"
                }`}
              />
            </div>

            {/* Tooltip */}
            <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg opacity-100 group-hover:opacity-100 whitespace-nowrap transition-opacity">
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
