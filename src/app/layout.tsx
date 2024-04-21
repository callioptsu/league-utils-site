import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Shutdown",
  description: "Site that renders League of Legends summoner informations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
