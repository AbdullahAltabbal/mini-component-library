/* eslint-disable no-unused-vars */
import { colors } from "@storybook/node-logger";
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = sizes[size];

  return (
    <Wrapper
      role="ProgressBar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden> {value}% </VisuallyHidden>
      <BarWrapper>
        <Progress
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        ></Progress>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;

const Progress = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  /**  damit die Bar ende nicht sichtbar wäre bei 99% Proress */
  overflow: hidden;

  border-radius: 4px;
`;
