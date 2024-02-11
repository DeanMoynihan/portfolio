import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEAN MOYNIHAN // DEVELOPER+DESIGNER",
  description: "One man design studio run out of the South East of England.",
  keywords: "independent, games, indie, flood, jagex, front, end, , developer, unity, UX, front-end, design, designer, web, one chance, one, chance, onechance, gamedev, pixel art, british, dean, moynihan, UK, north west, red, game, developer, dev, portfolio",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
