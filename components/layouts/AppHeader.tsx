'use client'
import React, {useState} from 'react';
import {ChevronRight, Hexagon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const AppHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header
                className="sticky sm:px-8 top-0 z-40 w-full border-b border-gray-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
                <div className="container flex h-16 items-center justify-between px-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Hexagon className="h-6 w-6 text-purple-500"/>
                        <span
                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              KB Lab
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/"
                              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
                            Home
                        </Link>
                        <Link
                            href="/#products"
                            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                        >
                            Products
                        </Link>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className="flex items-center space-x-2 md:hidden text-gray-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="text-sm font-medium">Menu</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`}/>
                    </button>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                            <Link href="mailto:aungkokothet@gmail.com">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/95 border-b border-gray-800">
                        <nav className="container py-4 flex flex-col gap-4 px-8">
                            <Link
                                href="#"
                                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#products"
                                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Button
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 w-full">
                                Get Started
                            </Button>
                        </nav>
                    </div>
                )}
            </header>

        </>
    );
};

export default AppHeader;