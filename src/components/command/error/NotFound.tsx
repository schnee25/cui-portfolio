import React from "react";
import { FC } from "react";

type Props = {
  command: string;
};

const NotFound: FC<Props> = ({ command }) => {
  // コマンド全文からコマンド部分だけを取り出す
  return command.includes(" ") ? (
    <p>bash: command not found: {command.substring(0, command.indexOf(" ") + 1)}</p>
  ) : (
    <p>bash: command not found: {command}</p>
  );
};

export default NotFound;
