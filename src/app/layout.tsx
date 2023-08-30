import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Alegreya, Inter } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leticia e Denis 💚",
  description: "Casamento de Letícia e Denis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={alegreya.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
