import { icons, LucideProps } from "lucide-react";

interface IconProps extends Partial<LucideProps> {
  name: keyof typeof icons; // Define que o nome deve ser um ícone válido do lucide-react
}

export const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Ícone "${name}" não encontrado no lucide-react.`);
    return null;
  }

  return <LucideIcon size={size} color={color} {...props} />;
};

export default Icon;
