import { Header, Footer } from "@/components";
import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/Providers";

const alegreya = Alegreya({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casório 💚",
  description: "Nosso casamento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={alegreya.className}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
