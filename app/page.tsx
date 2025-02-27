"use client"

import HeroSection from "@/components/layouts/HeroSection";
import ProductSection from "@/components/layouts/ProductSection";
import FinalCTASection from "@/components/layouts/FinalCTASection";

export default function LandingPage() {

    return (
        <main className="flex-1">
            <HeroSection/>
            <ProductSection/>
            <FinalCTASection/>
        </main>
    )
}

