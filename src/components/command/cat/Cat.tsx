import { FC } from "react";
import NoFileOrDir from "../error/NoFileOrDir";
import IsDir from "../error/IsDir";

import { CAT_FILE_CONTENTS } from "../../../util";
import React from "react";
import { DefaultPara, DefaultTxt } from "../../../components/Txt";

type Props = {
  dirItem: string[];
  fileName: string;
  currentDir: string;
  isFormatted: boolean;
};

const Cat: FC<Props> = ({ dirItem, fileName, currentDir, isFormatted }) => {
  // フォルダにcatを実行した場合にエラーを返す
  if (!fileName.includes(".")) {
    return <IsDir fileName={fileName} />;
  } else if (dirItem.includes(fileName)) {
    // urlがないならhover時にunderlineをつけない
    return CAT_FILE_CONTENTS[fileName].url === undefined ? (
      <>
        <DefaultPara>{CAT_FILE_CONTENTS[fileName].content}</DefaultPara>
        <br />
      </>
    ) : (
      <>
        <DefaultPara>
          <a href={CAT_FILE_CONTENTS[fileName].url} target="_blank" rel="noreferrer">
            {CAT_FILE_CONTENTS[fileName].content}
          </a>
        </DefaultPara>
      </>
    );
  } else {
    return <NoFileOrDir command={"cat"} fileOrDir={fileName} />;
  }
};

export default Cat;
