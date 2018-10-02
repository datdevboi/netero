import * as React from "react";
import styled from "styled-components";

const Header = styled.thead``;

const Row = styled.tr``;

const Head = styled.th``;

const Data = styled.td``;

class Table extends React.Component {
  static Header = Header;
  static Row = Row;
  static Head = Head;
  static Data = Data;
  render() {
    return <div>Hello from table</div>;
  }
}

export { Table };
