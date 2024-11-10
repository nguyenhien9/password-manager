import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "../../../components/react-hook-forms/RHFTextField";

export default function LoginForm() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <RHFTextField name="email" />
    </FormProvider>
  );
}
