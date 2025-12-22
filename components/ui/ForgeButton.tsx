import { FC } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type ForgeButtonVariant = "primary" | "secondary";

interface ForgeButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ForgeButtonVariant;
}

const ForgeButton: FC<ForgeButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const baseInnerStyles =
    "font-medium transition-colors flex items-center justify-center";

  const variants = {
    primary:
      "bg-forgeBlue text-black hover:text-white/80 hover:bg-forgeDark/50 transition",
    secondary:
      "bg-black text-forgeBlue hover:text-white/80 hover:bg-black/50 transition",
  };

  return (
    <HoverBorderGradient
      as="button"
      containerClassName="rounded-xl"
      className={`${baseInnerStyles} ${variants[variant]}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </HoverBorderGradient>
  );
};

export default ForgeButton;
