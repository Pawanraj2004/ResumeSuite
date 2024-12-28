"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.png";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-4 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex w-full items-center justify-right">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="ResumeSuite Logo"
            className="h-10 w-auto"
            priority
          />
        </Link>
        <span className="font-medium  font-extrabold">ResumeSuite</span>
        </div>
        {/* Navigation Links */}
        <div className="flex w-full justify-left">
        <nav
          aria-label="Site Navigation"
          className="flex gap-4 text-sm font-medium"
        >
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/insert", "Build"],
            ["/parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className={cx(
                "rounded-md px-2 py-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus-visible:bg-gray-100 lg:px-4",
                pathName === href && "font-bold text-gray-800"
              )}
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
