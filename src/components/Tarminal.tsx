import React, { FC, useState } from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../styles/color_palette";
import Header from "./organisms/header";
import handler from "./Command";
import Directory from "./Directory";
import {
  HOME_PATH,
  YUKI_PATH,
  PRODUCTS_PATH,
  CONTACTS_PATH,
  LS_HOME_ITEM,
  LS_YUKI_ITEM,
  LS_PRODUCTS_ITEM,
  LS_CONTACTS_ITEM,
} from "../util";
import { Txt, DefaultTxt } from "./Txt";

let historyNum = 0;
let historyStateNum = 0;
const Terminal: FC = () => {
  const [command, setCommand] = useState("");
  const [replies, setReplies] = useState([]);
  const [logs, setLogs] = useState([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentDir, setCurrentDir] = useState(YUKI_PATH);
  const [isFormatted, setIsFormatted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const res = handler(command, currentDir, setCurrentDir, isFormatted, setIsFormatted);
      setReplies([...replies, res]);
      setLogs([...logs, { command: command, dir: currentDir }]);
      setCommand("");
      if (res === "clear") {
        setReplies([]);
        setLogs([]);
      }

      // 履歴の保存
      if (command !== "") {
        setCommandHistory([...commandHistory, command]);
        historyNum += 1;
        historyStateNum = historyNum;
      }

      window.setTimeout(scrollBottom, 100);
    }
  };
  const scrollBottom = (): void => {
    document.getElementById("bottom").scrollIntoView({ behavior: "auto" });
  };
  const cdCompletion = (path: string, lsItems: string[]): void => {
    // lsItemsのフォルダから前方一致のものを抽出
    let completion_detail = lsItems
      .filter((item) => !item.includes("."))
      .find((item) => !item.indexOf(path));

    if (completion_detail !== undefined) {
      setCommand("cd " + completion_detail + "/");
    }
  };

  const catCompletion = (file: string, catItems: string[]): void => {
    // catItemsのファイルから前方一致のものを抽出
    let completion_detail = catItems
      .filter((item) => item.includes("."))
      .find((item) => !item.indexOf(file));

    if (completion_detail !== undefined) {
      setCommand("cat " + completion_detail);
    }
  };

  const handleOnTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      // 次の対象のオブジェクトに移動しない
      e.preventDefault();

      // cd補完
      if (command.startsWith("cd")) {
        // 入力された内容からdirNameを抽出
        let dirName = command.replace("cd ", "").replace(/\/$/, "");

        // pathが入力されていないときに補完しない
        if (dirName !== "") {
          // YUKI_PATHの時, LS_YUKI_ITEMから'.'を含まず前方一致のものを補完
          if (currentDir === YUKI_PATH) {
            cdCompletion(dirName, LS_YUKI_ITEM);
          }

          // HOME_PATHの時, LS_HOME_ITEMから'.'を含まず前方一致のものを補完
          else if (currentDir === HOME_PATH) {
            cdCompletion(dirName, LS_HOME_ITEM);
          }
        }
      }
      // cat補完
      else if (command.startsWith("cat")) {
        // 入力された内容からfileNameを抽出
        let fileName = command.replace("cat ", "").replace(/\/$/, "");

        // pathが入力されていないときに補完しない
        if (fileName !== "") {
          // YUKI_PATHの時, LS_YUKI_ITEMから'.'を含んで前方一致のものを補完
          if (currentDir === YUKI_PATH) {
            catCompletion(fileName, LS_YUKI_ITEM);
          }

          // PRODUCT_PATHの時, LS_PRODUCTS_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === PRODUCTS_PATH) {
            catCompletion(fileName, LS_PRODUCTS_ITEM);
          }

          // CONTACTS_PATHの時, LS_CONTACTS_ITEMから'.'を含んで前方一致のものを補完
          else if (currentDir === CONTACTS_PATH) {
            catCompletion(fileName, LS_CONTACTS_ITEM);
          }
        }
      }
    }
  };

  return (
    <>
      <Hscreen />
      <Container>
        <Header />
        <InputArea>
          {logs.map((log: { command: string; dir: string }, idx: number) => (
            <div key={idx}>
              <span>
                <DefaultTxt>yuki@portfolio</DefaultTxt>
                <DefaultTxt>:</DefaultTxt>
                <DefaultTxt>~</DefaultTxt>
                <Directory dir={log.dir} />
                <DefaultTxt> $ </DefaultTxt>
              </span>
              <DefaultTxt> {log.command}</DefaultTxt>
              {replies[idx]}
            </div>
          ))}
          <span>
            <DefaultTxt>yuki@portfolio</DefaultTxt>
            <DefaultTxt>:</DefaultTxt>
            <DefaultTxt>~</DefaultTxt>
            <Directory dir={currentDir} />
            <DefaultTxt> $ </DefaultTxt>
          </span>

          <TerminalInput
            autoFocus
            id="command-area"
            type="text"
            autoComplete="off"
            value={command}
            onChange={handleChange}
            onKeyPress={handleOnEnter}
            onKeyDown={handleOnTab}
          />
          <div id="bottom" style={{ float: "left" }} />
        </InputArea>
      </Container>{" "}
      <Hscreen />
    </>
  );
};

const Container = styled.div`
  background-color: ${COLOR_PALETTE.BLACK10};
  border-radius: 10px;
`;
const InputArea = styled.div`
  overflow: auto;
  height: 30vh;
  padding-left: 10px;
`;
const TerminalInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${COLOR_PALETTE.WHITE};
  caret-color: ${COLOR_PALETTE.WHITE};
  &:focus-within {
    outline: none;
  }
`;

const Hscreen = styled.div`
  height: 15vh;
`;

export default Terminal;
