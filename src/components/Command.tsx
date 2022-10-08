import React from "react";

import NotFound from "./command/error/NotFound";

import Ls from "./command/ls/Ls";

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

let dirItem: string[] = LS_YUKI_ITEM;

const handler = (
  inputCommand: string,
  currentDir: string,
  setCurrentDir: (currentDir: string) => void,
  isFormatted: boolean,
  setIsFormatted: (isFormatted: boolean) => void
): string | JSX.Element => {
  // 入力から前後のスペースを削除
  const command = inputCommand.trim();

  if (command === "") {
    return "";
  }

  // ls
  else if (command === "ls" || command.startsWith("ls ")) {
    if (currentDir === YUKI_PATH) {
      dirItem = LS_YUKI_ITEM;
    } else if (currentDir === HOME_PATH) {
      dirItem = LS_HOME_ITEM;
    } else if (currentDir === PRODUCTS_PATH) {
      dirItem = LS_PRODUCTS_ITEM;
    } else if (currentDir === CONTACTS_PATH) {
      dirItem = LS_CONTACTS_ITEM;
    }

    return <Ls dirItem={dirItem} />;
  }

  // cd
  else if (command === "cd") {
    setCurrentDir(YUKI_PATH);
  } else if (command.startsWith("cd ")) {
    // pathの抽出と/の削除
    let path = command.replace("cd ", "").replace(/\/$/, "");

    if (path === "." || path === "./") {
      return "";
    } else if (currentDir === YUKI_PATH && path === "products") {
      dirItem = LS_PRODUCTS_ITEM;
      setCurrentDir(YUKI_PATH + "/" + path);
    } else if (currentDir === YUKI_PATH && path === "contacts") {
      dirItem = LS_CONTACTS_ITEM;
      setCurrentDir(YUKI_PATH + "/" + path);
    } else if (currentDir === HOME_PATH && path === "yuki") {
      dirItem = LS_YUKI_ITEM;
      setCurrentDir(YUKI_PATH);
    } else if (path === ".." || path === "../") {
      if (currentDir === YUKI_PATH) {
        setCurrentDir(HOME_PATH);
      } else if (currentDir === PRODUCTS_PATH) {
        setCurrentDir(YUKI_PATH);
      } else if (currentDir === CONTACTS_PATH) {
        setCurrentDir(YUKI_PATH);
      }
    }
    // else {
    //   return dirItem.includes(path) ? (
    //     <NotDir fileName={path} />
    //   ) : (
    //     <NoFileOrDir command={"cd"} fileOrDir={path} />
    //   );
    // }
  }

  //   // cat
  //   else if (command === "cat") {
  //     // なにも実行しない
  //   } else if (command.startsWith("cat ")) {
  //     // 入力された内容からfileNameを抽出
  //     let fileName = command.replace("cat ", "").replace(/\/$/, "");

  //     return (
  //       <Cat
  //         dirItem={dirItem}
  //         fileName={fileName}
  //         currentDir={currentDir}
  //         isFormatted={isFormatted}
  //       />
  //     );
  //   }

  //   // whoami
  //   else if (command === "whoami") {
  //     return <Whoami />;
  //   }

  //   // pwd
  //   else if (command === "pwd") {
  //     return <Pwd currentDir={currentDir} />;
  //   }

  //   // clear
  //   else if (command === "clear") {
  //     return "clear";
  //   }

  //   // date
  //   else if (command === "date") {
  //     const dateStr = getDateStr();

  //     return <DateNow dateStr={dateStr} />;
  //   }

  //   // white (?)
  //   else if (command === "white" && currentDir === WHITE_PATH) {
  //     return <UbuntuText>No Path provided. Nothing to do 😴</UbuntuText>;
  //   } else if (command.startsWith("white ") && currentDir === WHITE_PATH) {
  //     let whiteFile = command.replace("white ", "").replace(/\/$/, "");

  //     return <White whiteFile={whiteFile} setIsFormatted={setIsFormatted} />;
  //   }

  //   // slide
  //   else if (command === "slide" && currentDir === SLIDE_PATH) {
  //     return <UbuntuText>No Path provided. Nothing to do 😴</UbuntuText>;
  //   } else if (command.startsWith("slide ") && currentDir === SLIDE_PATH) {
  //     let fileName = command.replace("slide ", "").replace(/\/$/, "");

  //     return <Slide dirItem={dirItem} fileName={fileName} currentDir={currentDir} />;
  //   }

  //   // pip
  //   else if (command === "pip" && currentDir === WHITE_PATH) {
  //     // なにも実行しない
  //   } else if (command.startsWith("pip ") && currentDir === WHITE_PATH) {
  //     let pipCommand = command.replace("pip ", "").replace(/\/$/, "");
  //     if (pipCommand === "install white") {
  //       return (
  //         <UbuntuText>
  //           <p>Requirement already satisfied: white</p>
  //           <p>Requirement already satisfied: pathspec</p>
  //           <p>Requirement already satisfied: click</p>
  //           <p>Requirement already satisfied: mypy-extensions</p>
  //           <p>Requirement already satisfied: typing-extensions</p>
  //           <p>Requirement already satisfied: regex</p>
  //           <p>Requirement already satisfied: platformdirs</p>
  //           <p>Requirement already satisfied: tomli</p>
  //         </UbuntuText>
  //       );
  //     } else if (pipCommand === "install -r requirements.txt") {
  //       return (
  //         <UbuntuText>
  //           <p>Requirement already satisfied: black==21.11b1</p>
  //           <p>Requirement already satisfied: click==8.0.3</p>
  //           <p>Requirement already satisfied: mypy-extensions==0.4.3</p>
  //           <p>Requirement already satisfied: pathspec==0.9.0</p>
  //           <p>Requirement already satisfied: platformdirs==2.4.0</p>
  //           <p>Requirement already satisfied: regex==2021.11.10</p>
  //           <p>Requirement already satisfied: tomli==1.2.2</p>
  //           <p>Requirement already satisfied: typing-extensions==4.0.0</p>
  //         </UbuntuText>
  //       );
  //     } else {
  //       return <NoFileOrDir command={"pip"} fileOrDir={pipCommand} />;
  //     }
  //   }

  // command not found
  else {
    return <NotFound command={command} />;
  }
};

export default handler;
