import React from "react";
import { FC } from "react";
import { COLOR_PALETTE } from "../../../styles/color_palette";
import styled from "styled-components";
import { Txt } from "../../Txt";

type Props = {
  dirItem: string[];
};

const Ls: FC<Props> = ({ dirItem }) => (
  <p>
    {/* ファイルは白 */}
    {dirItem
      .filter((fileName) => fileName.includes("."))
      .map((item) => (
        <>
          <Txt color={COLOR_PALETTE.WHITE} key={item}>
            {item}
          </Txt>
          <br />
        </>
      ))}
    {/* フォルダは青 */}
    {dirItem
      .filter((fileName) => !fileName.includes("."))
      .map((item) => (
        <>
          <Txt color={COLOR_PALETTE.BLUE30} key={item}>
            {item}
          </Txt>
          <br />
        </>
      ))}
  </p>
);

export default Ls;
