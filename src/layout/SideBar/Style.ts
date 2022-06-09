import styled from "styled-components";
import Colors from "../../util/Colors";

export const SiderContainer = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 101px;
  left: 0;
  background-color: ${Colors.grey};
  overflow-x: hidden;
`;
