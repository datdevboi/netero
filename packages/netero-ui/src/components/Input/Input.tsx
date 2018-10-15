import * as React from "react";
import styled from "styled-components";

const InputBase = styled.input`
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 1px solid #ccc;
  padding: 7px 14px;
  transition: 0.4s;
  background: transparent;

  border: 1px solid #ccc;
  padding: 7px 14px;
  transition: 0.4s;
  background: transparent;

  &:focus {
    outline: none;
  }

  & ~ .focus-border:before,
  & ~ .focus-border:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #3399ff;
    transition: 0.4s;
  }
  & ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  & ~ .focus-border i:before,
  & ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.6s;
  }
  & ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  &:focus ~ .focus-border:before,
  &:focus ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  &:focus ~ .focus-border i:before,
  &:focus ~ .focus-border i:after {
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }
  & ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  &:focus ~ label,
  .has-content.effect-19 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }
`;

const InputContainer = styled.div`
  position: relative;

  & > ${InputBase}.has-content ~ .focus-border:before,
  & > ${InputBase}.has-content ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }

  & > ${InputBase}.has-content ~ .focus-border i:before,
  & > ${InputBase}.has-content ~ .focus-border i:after {
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }

  & > ${InputBase}.has-content ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3399ff;
    transition: 0.3s;
  }
`;

interface IInput {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<IInput> {
  state = {
    hasFocus: false
  };

  handleFocus = () => {
    if (this.props.value !== "") {
      this.setState({
        hasFocus: true
      });
    }
  };
  public render() {
    return (
      <InputContainer>
        <InputBase
          type="text"
          placeholder=""
          value={this.props.value}
          onChange={this.props.handleChange}
          onFocus={this.handleFocus}
          className={
            this.state.hasFocus || this.props.value ? "has-content" : ""
          }
        />
        <label>{this.props.placeholder}</label>
        <span className="focus-border">
          <i />
        </span>
      </InputContainer>
    );
  }
}

export { Input };
