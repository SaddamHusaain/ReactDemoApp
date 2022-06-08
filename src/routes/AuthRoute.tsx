import AuthLayout from "../layout/AuthLayout/Index";

function AuthRoute({ children }: { children: JSX.Element }) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthRoute;
