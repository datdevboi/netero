import * as React from "react";
import styled from "styled-components";

const Header = styled.thead``;

const Row = styled.tr``;

const Head = styled.th``;

const Data = styled.td``;

const MainTable = styled.table``;
const Body = styled.tbody``;

class Table extends React.Component {
  static Header = Header;
  static Row = Row;
  static Head = Head;
  static Data = Data;
  static Body = Body;
  render() {
    return <MainTable>{this.props.children}</MainTable>;
  }
}

export { Table };
