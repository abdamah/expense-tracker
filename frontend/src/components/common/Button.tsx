import { FormEvent, lazy } from "react";

interface Props {
  type?: "submit" | "reset" | "button";
  label: string;
  onClick?: (event: FormEvent) => void;
}

const Button = ({ label, type = "button", ...rest }: Props) => {
  return (
    <button {...rest} className="btn btn-primary btn-lg">
      {label}
    </button>
  );
};

export default Button;
