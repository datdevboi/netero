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

export interface IBtnProps {
  color?: string;
  btnType?: "Primary" | "Info" | "Success" | "Danger" | "Warning";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick: () => void;
  children: any;
}

const Btn = styled.button<IBtnProps>`
  background: ${({ color, btnType }) =>
    color ? color : btnTypes[btnType || "Primary"]};
  
 
  width: ${props => btnSizes[props.size || "md"]};
  height: auto; 
  border: none;
  border-radius: 2px;
  padding: 7px 7px;
  color: white;
  font-size: auto;
  letter-spacing: .5px;
  font-weight: normal;
  box-shadow: 5px 5px 7px #808080;  
  font-family: Helvetica, sans-serif;
  
  
  
}
  &:hover {
    background: ${({ color, btnType }) =>
      color
        ? darken(0.07)(color)
        : darken(0.07)(btnTypes[btnType || "Primary"])};
   
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

export class Button extends React.Component<IBtnProps> {
  static defaultProps = {
    btnType: "Primary",
    size: "md"
  };
  render() {
    const { children, ...otherProps } = this.props;
    return <Btn {...otherProps}>{children}</Btn>;
  }
}
