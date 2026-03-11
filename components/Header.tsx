"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-brand-blue hover:opacity-90 transition-opacity"
        >
          AI Agent Challenge
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="text-sm px-4 py-2 rounded-full bg-brand-blue text-white hover:opacity-90 transition-opacity"
          >
            Subscribe
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-neutral-600 hover:text-brand-blue transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="block py-3 text-sm text-brand-blue font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe
          </Link>
        </div>
      )}
    </header>
  );
}
