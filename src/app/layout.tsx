import "@/styles/Board.css";
import "@/styles/Game.css";
import "@/styles/globals.css";
import "@/styles/Square.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application TicTacToe avec React",
  description: "Une application réaliser pour apprendre react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
