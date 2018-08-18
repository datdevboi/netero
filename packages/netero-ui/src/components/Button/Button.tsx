import * as React from "react";
import styled from "styled-components";
import { darken } from "polished";

const btnSizes: { [key: string]: string } = {
  sm: "100px",
  md: "120px",
  lg: "250px"
};

const btnTypes: { [key: string]: string } = {
  Primary: "#007aff",
  Info: "#62B1F6",
  Success: "#5cb85c",
  Danger: "#d9534f",
  Warning: "#f0ad4e"
};

interface IBtnProps {
  color?: string;
  type?: "Primary" | "Info" | "Success" | "Danger" | "Warning";
  size: "sm" | "md" | "lg";
}

const Btn = styled.button<any>`
  background: ${({ color, type }) => (color ? color : btnTypes[type])};
  
 
  width: ${props => btnSizes[props.size]};
  height: auto; 
  border: none;
  border-radius: 2px;
  padding: 7px 7px;
  color: white;
  font-size: auto;
  letter-spacing: .5px;
  font-weight: normal;
  box-shadow: 5px 5px 7px #808080;  
  font-family: Helvetica, sans-serif
  
  
}
  &:hover {
    background: ${({ color, type }) =>
      color ? darken(0.07)(color) : darken(0.07)(btnTypes[type])};
   
    letter-spacing: .5px;
    cursor: pointer;
  }
  &:active {
    box-shadow: 3px 2px 8px #808080;  
    outline: none;
  }
  
  &:disabled {
    background: grey;
    box-shadow: none;
    letter-spacing: normal;
    cursor: default;
  }

 
`;

export class Button extends React.Component<any> {
  static defaultProps = {
    type: "Primary"
  };
  render() {
    const { children, ...otherProps } = this.props;
    return <Btn {...otherProps}>{children}</Btn>;
  }
}
