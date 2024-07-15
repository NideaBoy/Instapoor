import MenuAside from "@/components/MenuAside"
import Header from "@/components/Header";
import MenuFooter from "@/components/MenuFooter";
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
        <MenuAside />
        {children}
        <MenuFooter/>
      </body>
    </html>
  );
}
