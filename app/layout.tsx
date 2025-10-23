import type { Metadata } from "next";
// import { Inter} from "next/font/google";
import localFont from "next/font/local"; 

import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const inter = localFont({src: "./Inter.ttf"})

// Inter({
//   display: "swap",
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   adjustFontFallback: false
// });



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
    <html lang="en" >
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
