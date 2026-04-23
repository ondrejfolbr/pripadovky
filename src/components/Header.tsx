"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Master" },
  { href: "/case-study-01", label: "01" },
  { href: "/case-study-02", label: "02" },
  { href: "/case-study-03", label: "03" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 lg:px-20 py-6 lg:py-9 max-w-[1920px] mx-auto">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="ANT Studio - full-service digitální agentura"
            width={401}
            height={34}
            priority
            className="h-[24px] lg:h-[34px] w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-primary text-[14px] lg:text-[18px] tracking-[-0.72px] transition-opacity ${
                pathname === item.href
                  ? "text-black font-bold"
                  : "text-grey hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
