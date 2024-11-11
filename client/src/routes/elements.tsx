import { Suspense, lazy, ElementType } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>Loading</div>}>
      <Component {...props} />
    </Suspense>
  );

// AUTH
export const LoginPage = Loadable(
  lazy(() => import("../pages/auth/LoginPage"))
);
export const RegisterPage = Loadable(
  lazy(() => import("../pages/auth/RegisterPage"))
);

// DASHBOARD
export const DashboardPage = Loadable(
  lazy(() => import("../pages/dashboard/DashboardPage"))
);

// PAGE
export const LandingPage = Loadable(
  lazy(() => import("../pages/home/HomePage"))
);
