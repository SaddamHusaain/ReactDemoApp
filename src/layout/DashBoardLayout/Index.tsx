import * as Style from "./Style";
import Header from "../../components/Header/Index";
import SideBar from "../../components/SIdeBar/Index";

function DashBoardLayout({ children }: { children: JSX.Element }) {
  return (
    <Style.AdminLayoutContainer>
      <Header />
      <SideBar />
      <Style.MainContent>
        <Style.ContentWrapper>DashBoard {children}</Style.ContentWrapper>
      </Style.MainContent>
    </Style.AdminLayoutContainer>
  );
}
export default DashBoardLayout;
