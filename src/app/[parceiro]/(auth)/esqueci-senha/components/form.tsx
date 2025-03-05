"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  S_EMAIL: z.string().min(1, "E-mail obrigatório!"),
});

type FormData = z.infer<typeof schema>;

export const FormEsqueciSenha = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      S_EMAIL: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-items-start">
        <label
          htmlFor="S_EMAIL"
          className="font-bold text-xl text-stone-600 dark:text-stone-400"
        >
          E-mail
        </label>
        <Input
          id="S_EMAIL"
          {...register("S_EMAIL")}
          data-invalid={!!errors.S_EMAIL?.message}
          placeholder="Seu e-mail"
          className="h-11 w-80 border-0 border-ring ring-inset ring-[2.5px] ring-stone-300 dark:ring-stone-800 bg-stone-100/55 dark:bg-stone-950/55 data-[invalid=true]:ring-red-400 dark:data-[invalid=true]:ring-red-500 focus-visible:ring-[2.5px] focus-visible:ring-primary"
        />
        {errors.S_EMAIL?.message && (
          <p className="text-red-500">{errors.S_EMAIL.message}</p>
        )}
      </div>
      <Button type="submit" className="font-bold cursor-pointer">
        Enviar
      </Button>
    </form>
  );
};
