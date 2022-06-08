import styled from "styled-components";

export const AdminLayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;
`;
export const MainContent = styled.div`
  overflow: auto;
  width: calc(100% - 102px);
  margin-left: auto;
  height: calc(100vh - 77px);
  margin-top: 77px;
  transition: 0.5s all ease;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  @media screen and (max-width: 767px) {
    width: 100%;
    overflow: auto;
  }
`;
export const ContentWrapper = styled.div` 
   padding: 15px;
   height: 100%;
   width: auto;
   @media screen and (max-width: 767px) {
      padding: 0;
`;
