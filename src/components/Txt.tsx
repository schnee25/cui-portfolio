import React from "react";
import { FC } from "react";
import { COLOR_PALETTE } from "../styles/color_palette";
import styled from "styled-components";

type TxtProps = {
  color: string;
  bold?: boolean;
  children: string | React.ReactNode;
};
type DefaultTxtProps = {
  children: string | React.ReactNode;
};

export const Txt: FC<TxtProps> = ({ color, children, bold = false }) =>
  bold ? (
    <SpanTxtBold color={color}>{children}</SpanTxtBold>
  ) : (
    <SpanTxt color={color}>{children}</SpanTxt>
  );

const SpanTxt = styled.span`
  color: ${(props) => props.color}; ;
`;
const SpanTxtBold = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: large;
`;

export const DefaultTxt: FC<DefaultTxtProps> = ({ children }) => (
  <Txt color={COLOR_PALETTE.WHITE}>{children}</Txt>
);

export const DefaultPara: FC<DefaultTxtProps> = ({ children }) => (
  <Para color={COLOR_PALETTE.WHITE}>{children}</Para>
);
const Para = styled.p`
  color: ${(props) => props.color};
`;
