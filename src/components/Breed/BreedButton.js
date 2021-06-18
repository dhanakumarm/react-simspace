import React from "react";

import classes from "./BreedList.module.css";
import styled from "styled-components";

const BreedButton = (props) => {
  const Button = styled.button`
    background: ${(props) => (props.primary ? "#afb9ea" : "white")};
  `;

  return (
    <div className={classes.cards}>
      <Button
        className={classes.button}
        primary={props.primary}
        onClick={props.onClick}
        value={props.value}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default BreedButton;
