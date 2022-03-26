import styled, { css } from "styled-components";

export const fontProps = css`
  font-family: "Roboto";
  font-weight: ${({ fw = "normal" }) => fw};
  font-size: ${({ fz = 14 }) => `${fz}px`};
  color: ${({ color = "black" }) => color};
  text-transform: ${({ upper }) => (upper ? "uppercase" : "normal")};
`;

export const flex = css`
  display: flex;
  justify-content: ${({ justify = "space-between" }) => justify};
  align-items: ${({ align = "flex-start" }) => align};
`;

export const block = css`
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  width: ${({ w = "auto" }) => w};
  height: ${({ h = "auto" }) => h};
  box-sizing: border-box;
  background: ${({ bg = "transparent" }) => bg};
`;

export const Grid = styled.div`
  display: grid;
  width: ${({ w = "100%" }) => w};
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  grid-template-columns: ${({ cols = "1fr" }) => cols};
  grid-template-rows: ${({ rows = "1fr" }) => rows};
  grid-column-gap: ${({ ySpacing = 0 }) => ySpacing};
  grid-row-gap: ${({ xSpacing = 0 }) => xSpacing};
`;

export const GridItem = styled.div`
  grid-column-start: ${({ colFrom = "auto" }) => colFrom};
  grid-column-end: ${({ colTo = "auto" }) => colTo};
  grid-row-start: ${({ rowFrom = "auto" }) => rowFrom};
  grid-row-end: ${({ rowTo = "auto" }) => rowTo};
`;

export const Heading = styled.h5`
  ${fontProps}
  margin: ${({ m = "0" }) => m};
`;

export const Column = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  align-items: ${({ align = "flex-start" }) => align};
`;

export const Row = styled.div`
  ${block}
  ${flex}
`;

export const Card = styled.section`
  ${block}
  ${flex}
	flex-direction: column;
  padding: 15px 25px;
  background: #fff;
  position: relative;
  border-radius: ${({ br = 4 }) => `${br}px`};
  box-shadow: 0px 1px 4px rgba(92, 92, 92, 0.25);
`;

export const Input = styled.input`
  border: none;
  border: 1px solid #729fcf;
  border-radius: 4px;
  color: black;
  background: transparent;
  width: 250px;
  padding: 3px;
  margin: ${({ m = 0 }) => m};
  transition: all 0.3s ease 0s;
  font-family: "Roboto";
  font-size: 14px;
  height: ${({ h = "32px" }) => h};
  box-sizing: border-box;
  &:focus {
    outline: none;
    transform: scale(1.01);
  }
  &::placeholder {
  font-family: "Roboto";
  font-size: 14px;
  }
}
::-webkit-input-placeholder { /* Chrome */
  color: @font-color;
  font-weight: 700;
}
:-ms-input-placeholder { /* IE 10+ */
  color: @font-color;
  font-weight: 700;
}
::-moz-placeholder { /* Firefox 19+ */
  color: @font-color;
  font-weight: 700;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: @font-color;
  font-weight: 700;
}
`;

export const Btn = styled.button`
  border: none;
  background-color: #e84142;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  padding: 5px 10px;
  height: ${({ h = "32px" }) => h};
  width: ${({ w = "100px" }) => w};
  margin: ${({ m = 0 }) => m};
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
