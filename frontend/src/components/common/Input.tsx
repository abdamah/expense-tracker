import { ChangeEvent } from "react";

interface Props {
  name: string;
  label: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, label, type = "text", ...rest }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input id={name} name={name} {...rest} className="form-control" />
    </div>
  );
};
