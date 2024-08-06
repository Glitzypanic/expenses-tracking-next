import "./globals.css";
import { ChakraProviders } from "./ChakraProvider";
import { NextProviders } from "./NextProvider";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "GTracker",
  description: "A simple expense tracker",
  icons: "icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased`}>
        <ChakraProviders>
          <NextProviders>{children}</NextProviders>
        </ChakraProviders>
      </body>
    </html>
  );
}
