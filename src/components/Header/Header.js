import React from "react";
import styled from "styled-components";

import logo from "../../assets/avalanche-avax-logo.png";
import { Heading } from "../../common";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  background: #e84142;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  align-items: center;
  z-index: 1;
  > img {
    width: 50px;
    height: 50px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
    </StyledHeader>
  );
};
