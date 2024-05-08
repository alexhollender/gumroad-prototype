import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as GlobalContext from "@/GlobalContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gumroad • product workflow on mobile prototype",
  description: "Created by Alex Hollender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalContext.GlobalProvider>
        <body>{children}</body>
      </GlobalContext.GlobalProvider>
    </html>
  );
}
