import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email!" }),
    password: z
      .string()
      .min(8, "At least 8 characters")
      .regex(
        /^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?~-])(?=.*[A-Z]).{8,}$/,
        "Password must start with an uppercase letter and include at least one special character"
      ),
    confirm_password: z.string(),
    first_name: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .regex(/^[a-zA-Z]+$/, "First name must only contain letters"),
    last_name: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .regex(/^[a-zA-Z]+$/, "Last name must only contain letters"),
    phone: z
      .string()
      .regex(/^0\d{9}$/, "Phone number must start with 0 and be 10 digits"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password does not match!",
    path: ["confirmPasword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
