import { Input, InputProps, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type Props = InputProps & {
  name: string;
  label?: string;
};
export default function RHFTextField({ name, label, ...others }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Typography.Text strong>{label}</Typography.Text>
          <Input
            style={{ width: "100%" }}
            {...field}
            {...others}
            status={error ? "error" : ""}
            allowClear
          />
          {error && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </div>
      )}
    />
  );
}
