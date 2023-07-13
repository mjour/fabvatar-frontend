import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import LoginLayout from "src/layouts/LoginLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: LoginLayout,
    component: lazy(() => import("src/views/pages/Home/Login")),
  },
  {
    exact: true,
    path: "/forgetpassword",
    layout: LoginLayout,
    component: lazy(() =>
      import("src/views/pages/Home/ForgotPassword/index.js")
    ),
  },
  {
    exact: true,
    path: "/register",
    layout: LoginLayout,
    component: lazy(() => import("src/component/SignUp")),
  },
  {
    exact: true,
    path: "/verify-otp",
    layout: LoginLayout,
    component: lazy(() => import("src/views/pages/Home/VarifyOtp/index")),
  },

  {
    path: "/reset-password",
    layout: LoginLayout,
    component: lazy(() => import("src/views/pages/Home/ResetPassword/index")),
  },
  {
    exact: true,
    guard: true,
    path: "/issuer",
    layout: LoginLayout,
    component: lazy(() => import("src/views/pages/Issuer/UserDetails")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
