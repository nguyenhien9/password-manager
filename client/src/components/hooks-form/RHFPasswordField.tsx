import { Controller, useFormContext } from "react-hook-form";
import { Input, InputProps, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
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
          <Input.Password
            style={{ width: "100%" }}
            {...field}
            {...others}
            status={error ? "error" : ""}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
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
