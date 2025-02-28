import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const ProductSection = () => {
    return (
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
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"> Custodial Wallets </span>
                                <span
                                    className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Student verification</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Rewards & Spending</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Student-driven services marketplace (DEX)</span>
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
                                        videoSrc="https://www.youtube.com/embed/_IY514eVIjo?si=v0szayS6uMJ9MS4S"
                                        thumbnailSrc="/kbtc-superapp.png"
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
                                            videoSrc="https://www.youtube.com/embed/eiXPegucSXU?si=BIsSIb7Yx74F8Q5b"
                                            thumbnailSrc="/drunk-duck-superapp.png"
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
                                    className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Cross-border loyalty ecosystem</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Digital loyalty cards (NFTs & SBTs)</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Credit Points</span>
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
                                <span>mBoss</span>
                            </div>
                            <h3 className="text-2xl font-bold"> Fast Cash Flow on the Blockchain</h3>
                            <p className="text-gray-400">
                                A web3 solution that enables businesses to trade invoices and access liquidity
                                more quickly.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                    <span
                        className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">NFT-based digital assets</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Decentralized marketplace (DEX)</span>
                                <span
                                    className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Credit scoring & identity verification (SSI)</span>

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
                                    src="/mboss.png?height=300&width=600"
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
                                        videoSrc="https://www.youtube.com/embed/rkHTV6jhneY?si=BfgCmS2gtJfcGXkh"
                                        thumbnailSrc="/mboss.png"
                                        thumbnailAlt="Hero Video"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProductSection;