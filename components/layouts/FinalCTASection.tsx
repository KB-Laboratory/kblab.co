import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

const FinalCtaSection = () => {
    return (
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
                            <Link href="https://forms.gle/An8RNiTdjE4JNXWf6">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;