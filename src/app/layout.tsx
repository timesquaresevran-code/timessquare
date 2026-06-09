import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupOuverture from "@/components/PopupOuverture";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Times Square Sevran | Fast Food Premium",
  description: "Découvrez le meilleur fast-food de Sevran. Burgers premium, Tacos signature et accompagnements de qualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-ts-bg text-ts-white antialiased min-h-screen flex flex-col pt-20`}>
        <Header />
        <PopupOuverture />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
