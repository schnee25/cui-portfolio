import React from "react";
import { FC } from "react";
import { COLOR_PALETTE } from "../styles/color_palette";
import styled from "styled-components";

type TxtProps = {
  color: string;
  children: string | React.ReactNode;
};
type DefaultTxtProps = {
  children: string | React.ReactNode;
};

export const Txt: FC<TxtProps> = ({ color, children }) => (
  <SpanTxt color={color}>{children}</SpanTxt>
);
const SpanTxt = styled.span`
  color: ${(props) => props.color};
`;

export const DefaultTxt: FC<DefaultTxtProps> = ({ children }) => (
  <Txt color={COLOR_PALETTE.WHITE}>{children}</Txt>
);
