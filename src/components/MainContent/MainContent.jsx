import React from "react";
import styled from "styled-components";
import Task from "../Task/Task";

const MainContentContainer = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.sizes.padding};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.sizes.margin};
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <Section>
        <h2>My Tasks</h2>
        <Task title="Task 1" description="Description for Task 1" />
        <Task title="Task 2" description="Description for Task 2" />
        <Task title="Task 3" description="Description for Task 3" />
      </Section>
    </MainContentContainer>
  );
};

export default MainContent;
