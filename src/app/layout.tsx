import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Micro Marketing Assistant",
  description: "Created by Ali Cagatay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
