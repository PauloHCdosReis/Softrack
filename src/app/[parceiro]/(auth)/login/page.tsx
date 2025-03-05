import { FormLogin } from "./components";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <h1 className="font-black text-3xl text-stone-800 dark:text-stone-100">
        Login
      </h1>
      <FormLogin />
      <Link href={"/softrack/esqueci-senha"} className="text-primary">
        Esqueci senha
      </Link>
    </>
  );
};

export default Login;
