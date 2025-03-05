"use client";
import { useTheme } from "@hooks/useTheme";
import Image from "next/image";
import LogoParceiroDark from "@public/softrack/LogoParceiroDark.png";
import LogoParceiroLight from "@public/softrack/LogoParceiroLight.png";

export const ImageLogo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image
          src={LogoParceiroDark}
          alt="Logo Parceiro Dark"
          className="w-72 h-14"
        />
      ) : (
        <Image
          src={LogoParceiroLight}
          alt="Logo Parceiro Light"
          className="w-72 h-14"
        />
      )}
    </>
  );
};
