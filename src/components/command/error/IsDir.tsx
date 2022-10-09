import React from "react";
import { FC } from "react";

type Props = {
  fileName: string;
};

const IsDir: FC<Props> = ({ fileName }) => <p>bash: cat: {fileName}: Is a directory</p>;

export default IsDir;
