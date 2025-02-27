'use client'
import React from 'react';
import {Hexagon} from "lucide-react";
import Link from "next/link";

const AppFooter = () => {
    return (
        <div>
            <footer className="w-full border-t border-gray-800 py-6 md:py-0 px-8">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <Link href="/" className="flex items-center gap-2">
                        <Hexagon className="h-6 w-6 text-purple-500"/>
                        <span
                            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              KB Lab
            </span>
                    </Link>
                    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                        <nav className="flex gap-4 md:gap-6">
                            <Link href="/"
                                  className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">
                                Home
                            </Link>
                            <Link href="#products"
                                  className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">
                                Products
                            </Link>
                            <Link href="mailto:aungkokothet@gmail.com"
                                  className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors">
                                Contact
                            </Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link href="https://www.linkedin.com/company/kb-lab"
                                  className="text-gray-400 hover:text-purple-400 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                            </Link>
                            <Link href="https://github.com/KB-Laboratory"
                                  className="text-gray-400 hover:text-purple-400 transition-colors">
                                <span className="sr-only">GitHub</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 text-center text-sm text-gray-400 py-8">
                    <p>© {new Date().getFullYear()} KB Lab. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AppFooter;