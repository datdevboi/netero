import * as React from "react";
import styled from "styled-components";

export interface ITable {
  styledFunc?: () => string;
  children?: any;
}

const Header = styled.thead<ITable>`
  margin: 1em 1em;
  text-align: left;

  ${props => props.styledFunc && props.styledFunc()};
`;

const Row = styled.tr<ITable>`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  &:nth-child(odd) td {
    background: #ebebeb;
  }

  &:nth-child(odd):hover td {
    background: #4e5066;
    color: white;
  }
  ${props => props.styledFunc && props.styledFunc()};
`;

const Head = styled.th<ITable>`
  text-align: left;
  padding: 10px;
  border-right: 1px solid #ddd;
  ${props => props.styledFunc && props.styledFunc()};
`;

const Data = styled.td<ITable>`
  text-align: left;
  padding: 5px;
  color: black;
  border-right: 1px solid #ddd;
  ${props => props.styledFunc && props.styledFunc()};
`;

const MainTable = styled.table<ITable>`
  max-width: 100%;
  width: auto;
  background-color: white;
  border-collapse: collapse;

  overflow: hidden;

  border-spacing: 0;
  border-style: solid;
  border-width: 2px;

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
