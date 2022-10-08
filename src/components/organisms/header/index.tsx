import React from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../../../styles/color_palette";

const Header = () => {
  return (
    <>
      <Container>
        <ListItem>
          <Item>yuki</Item>
          <Item>Help</Item>
        </ListItem>
      </Container>
    </>
  );
};
export default Header;
const Container = styled.div`
  background-color: ${COLOR_PALETTE.BLACK20};
  border-radius: 10px 10px 0 0;
`;
const Item = styled.li`
  margin-left: 10px;
  font-size: 1rem;
  list-style: none;
`;
const ListItem = styled.ul`
  padding: 0;
  display: flex;
`;
