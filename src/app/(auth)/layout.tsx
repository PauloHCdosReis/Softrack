import type { Metadata } from "next";

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
    <main>{children}</main>
  );
}
