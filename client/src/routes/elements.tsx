/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, lazy, Suspense } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

// AUTH
export const LoginPage = Loadable(
  lazy(() => import("../modules/auth/pages/LoginPage"))
);
export const RegisterPage = Loadable(
  lazy(() => import("../modules/auth/pages/RegisterPage"))
);

// DASHBOARD
export const HomePage = Loadable(
  lazy(() => import("../modules/dashboard/main/pages/HomePage"))
);
