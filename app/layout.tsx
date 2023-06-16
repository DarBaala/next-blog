import "./globals.scss";
import { Montserrat } from "next/font/google";

import Header from "@/style/components/Header";
import Footer from "@/style/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "App",
  description: "Приложение",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
