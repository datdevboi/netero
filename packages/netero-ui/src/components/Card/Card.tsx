import * as React from "react";
import styled from "styled-components";

interface ICard {}
const CardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 780px;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div<{}>`
  position: relative;
  background-color: #ffffff;
  height: 370px;
  width: 240px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: height 0.3s, box-shadow 0.3s;

  &:hover {
    height: 410px;
    box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
  }
`;

const CardFooter = styled.div<any>`
  position: absolute;
  bottom: 0;
  height: 130px;
  padding: 10px 15px;
  font-family: Helvetica;
  transition: color 0.3s;
`;

const CardImage = styled.img<{ selected: boolean }>`
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;

  height: 220px;
  min-width: 100%;

  ${props =>
    props.selected &&
    `height: 410px;
  opacity: 0.3;`};
`;

const CardText = styled.p`
  transition: color 0.3s;

  ${(props: any) => props.selecred && props.onSelectedStyles()};
`;

export class Card extends React.Component<any, any> {
  state = {
    selected: false
  };

  handleMouse = () => {
    this.setState((prevState: any) => ({
      selected: !prevState.selected
    }));
  };
  render() {
    return (
      <CardRow>
        <CardContainer
          onMouseEnter={this.handleMouse}
          onMouseLeave={this.handleMouse}
        >
          <CardImage
            selected={this.state.selected}
            src="https://placeimg.com/640/480/nature"
          />

          <CardFooter>
            <CardText>RECIPE</CardText>
            <Card>Title</Card>
            <p className="card-text">
              by
              <span className="card-author selected">Author</span>
            </p>
          </CardFooter>
        </CardContainer>
      </CardRow>
    );
  }
}
