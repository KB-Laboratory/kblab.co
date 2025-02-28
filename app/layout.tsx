import type {Metadata} from 'next'
import './globals.css'
import AppHeader from "@/components/layouts/AppHeader";
import AppFooter from "@/components/layouts/AppFooter";

export const metadata: Metadata = {
    title: 'KB Lab FinTech',
    description: 'We make finance easy for businesses—one SDK at a time.',
    generator: 'v0.dev',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body
            className="flex min-h-screen flex-col bg-gradient-to-b from-black to-gray-900 text-white">
        <AppHeader/>
        <div>{children}</div>
        <AppFooter/>
        </body>
        </html>
    )
}
