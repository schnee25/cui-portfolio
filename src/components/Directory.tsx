import React from "react";
import { FC } from "react";
import { COLOR_PALETTE } from "../styles/color_palette";
import { Txt } from "./Txt";

type Props = {
  dir: string;
};

const Directory: FC<Props> = ({ dir }) => {
  const displayDir = dir.replace("/home/yuki", "");

  return <Txt color={COLOR_PALETTE.PINK10}>{displayDir}</Txt>;
};

export default Directory;
