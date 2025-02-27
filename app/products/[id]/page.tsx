'use client'
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Hexagon, ChevronRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const products = [
    {
        id: 1,
        name: "School Super App",
        description: "Empower Education with Web3",
        featuredImage: "/kbtc-superapp.png?height=300&width=500",
        features: [
            "Student-Parent Communication",
            "Point Wallet Integration",
            "Mini Apps Support",
            "Secure Profiles",
            "Blockchain-Backed Transactions w/ Stellar",
        ],
        screenshots: [
            "/kbtc-superapp.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 2,
        name: "Drunk Duck",
        description:
            "A playful social app blending entertainment with decentralized functionality and community-driven experiences.",
        featuredImage: "/drunk-duck-superapp.png?height=300&width=500",
        features: [
            "Social Engagement",
            "Marketplace",
            "User Identity & Custom Avatars",
            "NFT Integration",
            "Point Wallet",
        ],
        screenshots: [
            "/drunk-duck-superapp.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 3,
        name: "Invoice Discounting",
        featuredImage: "/short-term-asset-management.png?height=300&width=500",
        description: "A web3 solution that enables businesses to trade invoices and access liquidity more quickly.",
        features: [
            "Invoice Management",
            "Discounting & Factoring",
            "Point Wallet",
            "Invoice on Blockchain"
        ],
        screenshots: [
            "/short-term-asset-management.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 4,
        name: "ShopperDoo",
        description: "A digital marketplace connecting sellers with buyers, offering seamless transactions and web3 perks.",
        featuredImage: "/placeholder.svg?height=300&width=500",
        features: [
            "Marketplace ",
            "Group Buy",
            "Point Wallet",
            "Professional Badges"
        ],
        screenshots: [
            "/placeholder.svg?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
]

export default function ProductDetail({params}: { params: { id: string } }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const product = products.find((p) => p.id === Number.parseInt(params.id)) || products[0]

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
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                                    {product.name}
                                </h1>
                                <p className="max-w-[600px] text-gray-400 md:text-xl">{product.description}</p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                    >
                                        Get Started
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                                    >
                                        Watch Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <Image
                                    src={product.featuredImage}
                                    width={550}
                                    height={550}
                                    alt={product.name}
                                    className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="bg-black/50 border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className="rounded-full bg-purple-500/10 p-3 w-12 h-12 flex items-center justify-center">
                                                <ChevronRight className="h-6 w-6 text-purple-400"/>
                                            </div>
                                            <p className="text-white group-hover:text-purple-400 transition-colors">{feature}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Product Screenshots
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.screenshots.map((screenshot, index) => (
                                <div key={index} className="relative group">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <Image
                                        src={screenshot || "/placeholder.svg"}
                                        width={500}
                                        height={300}
                                        alt={`${product.name} screenshot ${index + 1}`}
                                        className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Demo Section */}
                <section
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Product Demo
                        </h2>
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

