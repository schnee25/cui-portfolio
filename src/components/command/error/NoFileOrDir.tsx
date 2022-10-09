import React from "react";
import { FC } from "react";

type Props = {
  command: string;
  fileOrDir: string;
};

const NoFileOrDir: FC<Props> = ({ command, fileOrDir }) => (
  <p>
    bash: {command}: {fileOrDir}: No such file or directory
  </p>
);

export default NoFileOrDir;
