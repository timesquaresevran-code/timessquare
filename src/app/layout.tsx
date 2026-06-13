import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupOuverture from "@/components/PopupOuverture";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

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
      <body className={`${inter.className} ${greatVibes.variable} bg-ts-bg text-ts-white antialiased min-h-screen flex flex-col pt-28`}>
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
