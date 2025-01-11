"use client"

import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">MicroSaaS Challenge</div>
                <div className="hidden md:flex space-x-4">
                    <Link href="#about">
                        <Button variant="ghost">About</Button>
                    </Link>
                    <Link href="#faq">
                        <Button variant="ghost">FAQ</Button>
                    </Link>
                    <Link href="#subscribe">
                        <Button variant="outline">Subscribe</Button>
                    </Link>
                </div>
                <Button variant="outline" size="icon" className="md:hidden">
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </nav>
        </header>
    )
}