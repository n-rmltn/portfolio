import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Normand's Portfolio",
    description: "Web Portfolio of Normand Lubaton",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/norm.png" sizes="any" />
                <meta property="og:title" content="Normand's Portfolio" />
                <meta
                    property="og:description"
                    content="Web Portfolio of Normand Lubaton"
                />
                <meta property="og:image" content="/norm.png" />
                <meta
                    property="og:url"
                    content="https://www.normandlubaton.dev"
                />
                <meta property="og:type" content="website" />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
