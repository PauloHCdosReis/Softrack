import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl font-black">Página não encontrada</h1>
      <Link href="/" className="text-primary">
        Return Home
      </Link>
    </div>
  );
}
