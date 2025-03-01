import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import MainProvider from "@providers/main-provider";

const univiaPro = localFont({
  src: [
    {
      path: "./fonts/UniviaPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/UniviaPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/UniviaPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/UniviaPro-Ultra.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-univiapro",
});

export const metadata: Metadata = {
  title: "Softrack",
  description: "Softrack Soluções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${univiaPro.className} antialiased min-h-svh h-svh max-h-svh min-w-full w-full max-w-full`}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
