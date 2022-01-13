import React, { FunctionComponent } from "react";
import styled from "styled-components";

export type OverwiewContainerProps = {
  children: React.ReactNode[];
};
const Container = styled.div`
  display: flex;
  width: 60%;
`;
const Pane = styled.div`
  flex: 1;
`;

const OverwiewContainer: FunctionComponent<OverwiewContainerProps> = ({
  children,
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  );
};

export default OverwiewContainer;
