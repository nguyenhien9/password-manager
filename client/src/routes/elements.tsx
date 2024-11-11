import { Component, ElementType, lazy, Suspense } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>Loading</div>}>
      <Component {...props} />
    </Suspense>
  );

// Auth

export const RegisterPage = Loadable(
  lazy(() => import("../modules/auth/pages/RegisterPage"))
);

// Page
export const HomePage = Loadable(
  lazy(() => import("../modules/main/pages/HomePage"))
);
