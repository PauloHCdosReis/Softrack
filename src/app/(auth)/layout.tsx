import { AuthModeToggle } from "@components/theme";
import type { Metadata } from "next";
import Image from "next/image";
import IconParceiro from "@public/softrack/IconParceiro.png";

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
      <div className="hidden lg:flex flex-1 relative justify-center items-center bg-gradient-to-br from-stone-50 to-stone-200 dark:from-stone-900 dark:to-stone-950">
        <Image src={IconParceiro} alt="Logo Parceiro" className="w-36 h-28" />
      </div>
      <div className="flex w-full lg:w-auto flex-col relative justify-center items-center lg:px-16 gap-10 bg-stone-50 dark:bg-stone-900">
        {children}
        <div className="absolute right-1 bottom-1 md:right-4 md:bottom-4">
          <AuthModeToggle />
        </div>
      </div>
    </main>
  );
}
