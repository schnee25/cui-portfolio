import React from "react";
import { calcAge } from "./CalcAge";
export const HOME_PATH: string = "/home";
export const YUKI_PATH: string = "/home/yuki";
export const PRODUCTS_PATH: string = "/home/yuki/products";
export const CONTACTS_PATH: string = "/home/yuki/contacts";

export const LS_HOME_ITEM: string[] = ["yuki"];
export const LS_YUKI_ITEM: string[] = ["profile.txt", "products", "contacts"];
export const LS_PRODUCTS_ITEM: string[] = ["portfolio.txt", "cui-portfolio.txt"];

export const LS_CONTACTS_ITEM: string[] = [
  "twitter.txt",
  "github.txt",
  "facebook.txt",
  "instagram.txt",
  "qiita.txt",
  "gmail.txt",
];

interface catFiles {
  [key: string]: { [key: string]: string };
}

export const CAT_FILE_CONTENTS: catFiles = {
  "profile.txt": {
    content:
      "Name: yuki(こひまめ), Age:" +
      calcAge(20001226).toString() +
      " , Likes: 美味しいものを食べること",
  },
  "twitter.txt": {
    content: "twitter: こひまめ ",
    url: "https://twitter.com/schnee25v",
  },
  "github.txt": {
    content: "GitHub: schnee25",
    url: "https://github.com/schnee25",
  },
  "facebook.txt": {
    content: "facebook: Yukino Oyamada",
    url: "https://www.facebook.com/yuki.O2525/",
  },
  "instagram.txt": {
    content: "instagram:nemunemunyanko_chan ",
    url: "https://www.instagram.com/nemunemunyanko_chan/",
  },
  "gmail.txt": {
    content: "Gmail:yukino.oyamada@gmail.com",
    url: "mailto:yukino.oyamada@gmail.com",
  },
  "portfolio.txt": {
    content: "yukipedia.io",
    url: "https://yukipedia.io/",
  },
  "cui-portfolio.txt": {
    content: "cui-portfolio",
    // url: "https://yukipedia.io/",
  },
};
