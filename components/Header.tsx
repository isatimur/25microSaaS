"use client"

import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-brand-blue hover:opacity-90 transition-opacity">
                    MicroSaaS Challenge
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/about" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                        About
                    </Link>
                    <Link href="/faq" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                        FAQ
                    </Link>
                    <Link href="#newsletter" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                        Subscribe
                    </Link>
                </div>
                <Button variant="outline" size="icon" className="md:hidden">
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    )
}