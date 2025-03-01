import Image from "next/image";
import LogoParceiroDark from "@public/softrack/LogoParceiroDark.png";
import LogoParceiroLight from "@public/softrack/LogoParceiroLight.png";
import { FormLogin } from "./components";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div>
        <Image
          src={LogoParceiroDark}
          alt="Logo Parceiro Dark"
          className="hidden dark:flex w-72 h-14"
        />
        <Image
          src={LogoParceiroLight}
          alt="Logo Parceiro Light"
          className="flex dark:hidden w-72 h-14"
        />
      </div>
      <h1 className="font-black text-3xl text-stone-800 dark:text-stone-100">
        Login
      </h1>
      <FormLogin />
      <Link href={"/esqueci-senha"} className="text-primary">
        Esqueci senha
      </Link>
    </>
  );
};

export default Login;
