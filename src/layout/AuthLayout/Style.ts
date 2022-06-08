import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    height: 100vh;
    padding: 20px;
    overflow-y: auto;
    align-items: flex-start;
  }
  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;
