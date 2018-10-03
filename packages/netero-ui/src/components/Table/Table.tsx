import * as React from "react";
import styled from "styled-components";

export interface ITable {
  styledFunc?: () => string;
  children?: any;
}

const Header = styled.thead<ITable>`
  margin: 1em 0;
  text-align: left;
  ${props => props.styledFunc && props.styledFunc()};
`;

const Row = styled.tr<ITable>`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  ${props => props.styledFunc && props.styledFunc()};
`;

const Head = styled.th<ITable>`
  ${props => props.styledFunc && props.styledFunc()};
`;

const Data = styled.td<ITable>`
  text-align: left;
  padding: 5px;
  ${props => props.styledFunc && props.styledFunc()};
`;

const MainTable = styled.table<ITable>`
  max-width: 100%;
  background-color: white;

  background: #eeee;
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;

  ${props => props.styledFunc && props.styledFunc()};
`;
const Body = styled.tbody<ITable>`
  ${props => props.styledFunc && props.styledFunc()};
`;
const Foot = styled.tfoot<ITable>`
  ${props => props.styledFunc && props.styledFunc()};
`;

class Table extends React.Component {
  static Header = Header;
  static Row = Row;
  static Head = Head;
  static Data = Data;
  static Body = Body;
  static Foot = Foot;
  render() {
    return <MainTable>{this.props.children}</MainTable>;
  }
}

export { Table };
