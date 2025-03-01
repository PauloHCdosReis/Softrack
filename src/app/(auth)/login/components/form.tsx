"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  S_USERNAME: z.string().min(1, "Usuário obrigatório!"),
  S_PASSWORD: z.string().min(1, "Senha obrigatória!"),
});

type FormData = z.infer<typeof schema>;

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      S_USERNAME: "",
      S_PASSWORD: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-items-start">
        <label
          htmlFor="S_USERNAME"
          className="font-bold text-xl text-stone-600 dark:text-stone-400"
        >
          Usuário
        </label>
        <Input
          id="S_USERNAME"
          {...register("S_USERNAME")}
          data-invalid={!!errors.S_USERNAME?.message}
          placeholder="Seu usuário"
          className="h-11 w-80 border-0 border-ring ring-inset ring-[2.5px] ring-stone-300 dark:ring-stone-800 bg-stone-100/55 dark:bg-stone-950/55 data-[invalid=true]:ring-red-400 dark:data-[invalid=true]:ring-red-500 focus-visible:ring-[2.5px] focus-visible:ring-primary"
        />
        {errors.S_USERNAME?.message && (
          <p className="text-red-500">{errors.S_USERNAME.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-items-start">
        <label
          htmlFor="S_PASSWORD"
          className="font-bold text-xl text-stone-600 dark:text-stone-400"
        >
          Senha
        </label>
        <Input
          id="S_PASSWORD"
          {...register("S_PASSWORD")}
          data-invalid={!!errors.S_PASSWORD?.message}
          placeholder="Sua senha"
          className="h-11 w-80 border-0 border-ring ring-inset ring-[2.5px] ring-stone-300 dark:ring-stone-800 bg-stone-100/55 dark:bg-stone-950/55 data-[invalid=true]:ring-red-400 dark:data-[invalid=true]:ring-red-500 focus-visible:ring-[2.5px] focus-visible:ring-primary"
        />
        {!!errors.S_PASSWORD?.message && (
          <p className="text-red-500">{errors.S_PASSWORD.message}</p>
        )}
      </div>
      <Button type="submit" className="font-bold cursor-pointer">
        Enviar
      </Button>
    </form>
  );
};
