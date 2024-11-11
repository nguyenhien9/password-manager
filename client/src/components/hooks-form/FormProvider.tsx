/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FormProvider as RHFForm, UseFormReturn } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: (data: any) => void;
};
export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <RHFForm {...methods}>
      <Form onFinish={onSubmit}>{children}</Form>
    </RHFForm>
  );
}
