import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softrack | Private",
  description: "Softrack Soluções",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full max-h-full w-full max-w-full">{children}</main>
  );
}
