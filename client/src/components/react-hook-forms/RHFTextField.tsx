import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";

type inputProps = {
  name: string;
};

export default function RHFTextField({ name, ...others }: inputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} {...others} />}
    />
  );
}
