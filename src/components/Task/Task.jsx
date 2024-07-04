import React from "react";
import styled from "styled-components";

const TaskItemContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
`;

const Task = ({ title, description }) => {
  return (
    <TaskItemContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </TaskItemContainer>
  );
};
export default Task;
