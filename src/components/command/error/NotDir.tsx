import React from "react";
import { FC } from "react";

type Props = {
  fileName: string;
};

const NotDir: FC<Props> = ({ fileName }) => <p>bash: cd: {fileName}: not a directory</p>;

export default NotDir;
