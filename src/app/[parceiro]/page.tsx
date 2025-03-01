import { redirect } from "next/navigation";

const Parceiro = async ({
  params,
}: {
  params: Promise<{ parceiro: string }>;
}) => {
  const parceiro = (await params).parceiro;

  return <div>{parceiro}</div>;

  return redirect(`/${parceiro}/`);
};

export default Parceiro;
