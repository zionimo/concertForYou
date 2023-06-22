import "./globals.css";
import { Viaoda_Libre } from "next/font/google";

const inter = Viaoda_Libre({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "CONCERT FOR YOU",
  description: "Feel the Rhythm of Your Heart's Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
