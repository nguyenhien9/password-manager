import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Row, Space, Typography } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import { RegisterFormData, registerSchema } from "../schemas/registerSchema";
import FormProvider, {
  RHFPasswordField,
  RHFTextField,
} from "../../../components/hooks-form";
import useAuthContext from "../context/useAuthContext";

export default function RegisterForm() {
  const { register } = useAuthContext();
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit } = methods;
  const onSubmit = async (data: RegisterFormData) => {
    try {
      if (register) {
        console.log("User", data);
        await register(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Typography.Title type="secondary" style={{ textAlign: "center" }}>
          Become a member
        </Typography.Title>
        <RHFTextField
          label="Email"
          name="email"
          placeholder="E.g: test@gmail.com"
          prefix={<MailOutlined />}
          autoFocus
        />
        <RHFPasswordField
          label="Password"
          name="password"
          placeholder="Enter password"
          prefix={<LockOutlined />}
        />
        <RHFPasswordField
          label="Confirm password"
          name="confirm_password"
          placeholder="Repeat password"
          prefix={<LockOutlined />}
        />
        <Row gutter={16}>
          <Col span={24} md={12}>
            <RHFTextField
              label="First name"
              name="first_name"
              placeholder="First name"
              prefix={<UserOutlined />}
            />
          </Col>
          <Col span={24} md={12}>
            <RHFTextField
              label="Last name"
              name="last_name"
              placeholder="Last name"
              prefix={<UserOutlined />}
            />
          </Col>
        </Row>
        <RHFTextField
          label="Phone number"
          name="phone"
          placeholder="E.g: 0393 xxx xxx"
        />
        <Space>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Space>
      </Space>
    </FormProvider>
  );
}
