import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Viagens",
  description: "Destinos para tirar férias",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
