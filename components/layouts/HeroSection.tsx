import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const HeroSection = () => {
    return (
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
                                    Contact Us </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
                                asChild
                            >
                                <Link href="mailto:aungmyatmoe834@gmail.com">
                                    Book a Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative group">
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

    );
};

export default HeroSection;