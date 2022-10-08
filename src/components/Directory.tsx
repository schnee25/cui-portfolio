import React from "react";
import { FC } from "react";

type Props = {
  dir: string;
};

const Directory: FC<Props> = ({ dir }) => {
  const displayDir = dir.replace("/home/yuki", "");

  return <span>{displayDir}</span>;
};

export default Directory;
