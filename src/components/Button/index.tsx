import "./styles.css";

type Props = {
  label: string;
  variant?: "primary" | "secondary";
};

export function Button({ label, variant = "primary" }: Props) {
  return (
    <button
      className={
        variant === "primary"
          ? "button-container-primary"
          : "button-container-secondary"
      }
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
