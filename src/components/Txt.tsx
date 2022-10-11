import React from "react";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  color: string;
  children: string | React.ReactNode;
};

const Txt: FC<Props> = ({ color, children }) => <SpanTxt color={color}>{children}</SpanTxt>;
const SpanTxt = styled.span`
  color: ${(props) => props.color};
`;
export default Txt;
