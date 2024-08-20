import "./globals.css";
import { ChakraProviders } from "./providers/ChakraProvider";
import { NextProviders } from "./providers/NextProvider";
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
      <head>
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A simple expense tracker" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <ChakraProviders>
          <NextProviders>{children}</NextProviders>
        </ChakraProviders>
      </body>
    </html>
  );
}
