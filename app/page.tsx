"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Check, ChevronRight, Hexagon, LineChart, MessageSquare, Settings} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-gray-900 text-white">
            {/* Header */}
            <header
                className="sticky sm:px-8 top-0 z-40 w-full border-b border-gray-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
                <div className="container flex h-16 items-center justify-between px-8">
                    <div className="flex items-center gap-2">
                        <Hexagon className="h-6 w-6 text-purple-500"/>
                        <span
                            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              KB Lab
            </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#"
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
                            Get Started
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

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
                        <div
                            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div>
                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div
                                    className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 backdrop-blur-sm">
                                    <span>Web3 Innovation</span>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                                        Transform your business with Web3
                                    </h1>
                                    <p className="max-w-[600px] text-gray-400 md:text-xl">
                                        We empower digital companies to leverage web3 for their business success
                                        leveraging on the open source software and community of practice around it.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                        asChild
                                    >
                                        <Link href="mailto:aungmyatmoe834@gmail.com">
                                            Start Free Trial
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                                        asChild
                                    >
                                        <Link href="mailto:aungmyatmoe834@gmail.com">
                                            Book a Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <Image
                                    src="/placeholder.svg?height=550&width=550"
                                    width={550}
                                    height={550}
                                    alt="Hero"
                                    className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section id="products" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div
                                className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300 backdrop-blur-sm">
                                <span>Our Products</span>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                                    Cutting-Edge Web3 Solutions
                                </h2>
                                <p className="max-w-[900px] text-gray-400 md:text-xl">
                                    Explore our suite of powerful tools designed to revolutionize your workflow.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 space-y-20">
                            {/* Product 1 */}
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <div
                                        className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                                        <span>School Super App

</span>
                                    </div>
                                    <h3 className="text-2xl font-bold"> Empower Education with Web3</h3>
                                    <p className="text-gray-400">
                                        A platform for students and parents, offering digital communication, mini apps,
                                        and point wallet features.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                    <span
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
Education                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
ParentsAndStudents                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
Communication                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      Real-time Chat
                    </span>
                                    </div>
                                    <Button
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-2"
                                    asChild>
                                        <Link href="/products/1">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4 lg:pl-10">
                                    <div className="relative group">
                                        <div
                                            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                        <Image
                                            src="/kbtc-superapp.png?height=300&width=600"
                                            width={600}
                                            height={300}
                                            alt="Analytics Dashboard"
                                            className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                        />
                                    </div>
                                    <div
                                        className="relative aspect-video rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
                                        <div className="relative">
                                            <HeroVideoDialog
                                                className="block dark:hidden"
                                                animationStyle="from-center"
                                                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                                thumbnailAlt="Hero Video"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="order-2 lg:order-1 space-y-4 lg:pr-10">
                                    <div className="relative group">
                                        <div
                                            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                        <Image
                                            src="/drunk-duck-superapp.png?height=300&width=600"
                                            width={600}
                                            height={300}
                                            alt="Drunk Ducks

"
                                            className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                        />
                                    </div>
                                    <div
                                        className="relative aspect-video rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
                                        <div className="flex items-center justify-center h-full">
                                            <div className="relative">
                                                <HeroVideoDialog
                                                    className="block dark:hidden"
                                                    animationStyle="from-center"
                                                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                                    thumbnailAlt="Hero Video"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 space-y-4">
                                    <div
                                        className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                                        <span>Drunk Duck</span>
                                    </div>
                                    <h3 className="text-2xl font-bold"> Fun Meets Web3
                                    </h3>
                                    <p className="text-gray-400">
                                        A playful social app blending entertainment with decentralized functionality and
                                        community-driven experiences.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                    <span
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      Real-time Chat
                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
Community Driven                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      Collaborative
                    </span>
                                    </div>
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-2">
                                        <Link href="/products/2">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <div
                                        className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                                        <span>Invoice Discounting</span>
                                    </div>
                                    <h3 className="text-2xl font-bold"> Fast Cash Flow on the Blockchain</h3>
                                    <p className="text-gray-400">
                                        A web3 solution that enables businesses to trade invoices and access liquidity
                                        more quickly.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                    <span
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
Marketplace                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
ECommerce                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
Seamless Transactions                    </span>
                                    </div>
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-2">
                                        <Link href="/products/3">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4 lg:pl-10">
                                    <div className="relative group">
                                        <div
                                            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                        <Image
                                            src="/short-term-asset-management.png?height=300&width=600"
                                            width={600}
                                            height={300}
                                            alt="Workflow Automation"
                                            className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                        />
                                    </div>
                                    <div
                                        className="relative aspect-video rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
                                        <div className="relative">
                                            <HeroVideoDialog
                                                className="block dark:hidden"
                                                animationStyle="from-center"
                                                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                                thumbnailAlt="Hero Video"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Product 4 */}
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="order-2 lg:order-1 space-y-4 lg:pr-10">
                                    <div className="relative group">
                                        <div
                                            className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                        <Image
                                            src="/placeholder.svg?height=300&width=600"
                                            width={600}
                                            height={300}
                                            alt="Drunk Ducks"
                                            className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                        />
                                    </div>
                                    <div
                                        className="relative aspect-video rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
                                        <div className="relative">
                                            <HeroVideoDialog
                                                className="block dark:hidden"
                                                animationStyle="from-center"
                                                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                                thumbnailAlt="Hero Video"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 space-y-4">
                                    <div
                                        className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                                        <span>ShopperDoo</span>
                                    </div>
                                    <h3 className="text-2xl font-bold"> Next-Level Shopping
                                    </h3>
                                    <p className="text-gray-400">
                                        A digital marketplace connecting sellers with buyers, offering seamless
                                        transactions and web3 perks.

                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                    <span
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
Marketplace                    </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
ECommerce                   </span>
                                        <span
                                            className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                      Group Buy
                    </span>
                                    </div>
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-2">
                                        <Link href="/products/4">
                                            Learn More
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Final CTA Section */}
                <section
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                                    Ready to Transform Your Business?
                                </h2>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                    asChild
                                >
                                    <Link href="mailto:aungkokothet@gmail.com">
                                        Contact Us
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
                                >
                                    <Link href="mailto:aungmyatmoe834@gmail.com">
                                        Schedule a Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-800 py-6 md:py-0 px-8">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Hexagon className="h-6 w-6 text-purple-500"/>
                        <span
                            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              KB Lab
            </span>
                    </div>
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
                            {/*<Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">*/}
                            {/*    <span className="sr-only">Twitter</span>*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="24"*/}
                            {/*        height="24"*/}
                            {/*        viewBox="0 0 24 24"*/}
                            {/*        fill="none"*/}
                            {/*        stroke="currentColor"*/}
                            {/*        strokeWidth="2"*/}
                            {/*        strokeLinecap="round"*/}
                            {/*        strokeLinejoin="round"*/}
                            {/*        className="h-5 w-5"*/}
                            {/*    >*/}
                            {/*        <path*/}
                            {/*            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>*/}
                            {/*    </svg>*/}
                            {/*</Link>*/}
                            {/*<Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">*/}
                            {/*    <span className="sr-only">LinkedIn</span>*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="24"*/}
                            {/*        height="24"*/}
                            {/*        viewBox="0 0 24 24"*/}
                            {/*        fill="none"*/}
                            {/*        stroke="currentColor"*/}
                            {/*        strokeWidth="2"*/}
                            {/*        strokeLinecap="round"*/}
                            {/*        strokeLinejoin="round"*/}
                            {/*        className="h-5 w-5"*/}
                            {/*    >*/}
                            {/*        <path*/}
                            {/*            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>*/}
                            {/*        <rect width="4" height="12" x="2" y="9"/>*/}
                            {/*        <circle cx="4" cy="4" r="2"/>*/}
                            {/*    </svg>*/}
                            {/*</Link>*/}
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
                <div className="container mt-4 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

