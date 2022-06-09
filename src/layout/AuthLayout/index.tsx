import { AuthContainer, FormContainer } from "./Style";

function AuthLayout({ children }: { children: JSX.Element }) {
  return (
    <AuthContainer>
      <FormContainer>AuthLayout {children}</FormContainer>
    </AuthContainer>
  );
}

export default AuthLayout;
