import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Anne Olthoff's portfolio",
  description: "",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <div className="page_layout">
          <Header />
          <main className="main_content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
