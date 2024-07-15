import Aside from "@/components/Aside"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "@/style/globals.css";




export const metadata: Metadata = {
  title: "Instapoor",
  description: "It's clone of instagram by nextjs without backend :V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body>
        <Header/>
        <Aside />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
