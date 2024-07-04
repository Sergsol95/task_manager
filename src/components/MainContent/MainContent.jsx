import React from "react";
import styled from "styled-components";
import Task from "../Task/Task";

const MainContentContainer = styled.main`
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f2f5;
`;

const Section = styled.section`
  margin-bottom: 20px;
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
