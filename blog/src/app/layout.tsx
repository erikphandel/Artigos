import type { Metadata } from "next";
import Header from "./components/Header";
import "@/styles/globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Tecnologias modernas",
  description: "Blog com diversos artigos sobre programação, tecnologia e desenvolvimento de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <body className="min-h-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
