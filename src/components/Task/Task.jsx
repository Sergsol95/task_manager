import React from "react";
import styled from "styled-components";

const TaskItemContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskDivider = styled.div`
`

const Task = ({ title, description, onDelete }) => {
  return (
    <TaskItemContainer>
      <TaskDivider>
      <h3>{title}</h3>
      <p>{description}</p>
      </TaskDivider>
      <DeleteButton onСlick={onDelete}>Delete</DeleteButton>
    </TaskItemContainer>
  );
};
export default Task;
