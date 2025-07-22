import type { ButtonHTMLAttributes } from "react";
import "./styles.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary";
};
export function Button({ label, variant = "primary", ...rest }: Props) {
  return (
    <button
      className={
        variant === "primary"
          ? "button-container-primary"
          : "button-container-secondary"
      }
      {...rest}
    >
      <p
        className={
          variant === "primary"
            ? "button-label-primary"
            : "button-label-secondary"
        }
      >
        {label}
      </p>
    </button>
  );
}
