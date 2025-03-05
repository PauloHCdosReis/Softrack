import Link from "next/link";
import { FormEsqueciSenha } from "./components";

const Login = () => {
  return (
    <>
      <h1 className="font-black text-3xl text-stone-800 dark:text-stone-100">
        Esqueci Senha
      </h1>
      <FormEsqueciSenha />
      <Link href={"/softrack/login"} className="text-primary">
        Voltar para o login
      </Link>
    </>
  );
};

export default Login;
