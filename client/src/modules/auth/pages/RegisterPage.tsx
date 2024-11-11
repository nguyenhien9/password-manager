import AuthLayout from "../../../layouts/auth/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return <AuthLayout leftPart={<RegisterForm />} rightContent="aaa" />;
}
