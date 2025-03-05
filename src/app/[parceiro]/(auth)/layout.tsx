import type { Metadata } from "next";
import Image from "next/image";
import IconParceiro from "@public/softrack/IconParceiro.png";
import { ThemeSwitcher } from "@components/theme";
import { ImageLogo } from "./components";

export const metadata: Metadata = {
  title: "Softrack | Auth",
  description: "Softrack Soluções",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full max-h-full flex flex-row">
      <div className="hidden lg:flex flex-1 relative justify-center items-center bg-gradient-to-br from-muted to-background">
        <Image
          src={IconParceiro}
          alt="Logo Parceiro"
          className="w-36 h-28"
          priority
        />
      </div>
      <div className="flex w-full lg:w-auto flex-col relative justify-center items-center lg:px-16 gap-10 bg-card">
        <ImageLogo />
        {children}
        <div className="absolute right-1 bottom-1 md:right-4 md:bottom-4">
          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
}
