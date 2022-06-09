import * as Style from "./Style";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";

function DashBoardLayout({ children }: { children: JSX.Element }) {
  return (
    <Style.AdminLayoutContainer>
      <Header />
      <SideBar />
      <Style.MainContent>DashBoard {children}</Style.MainContent>
      <Footer />
    </Style.AdminLayoutContainer>
  );
}
export default DashBoardLayout;
