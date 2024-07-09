import React, {useState} from "react";
import styled from "styled-components";
import Task from "../Task/Task";
import { v4 as uuidv4 } from 'uuid';

const MainContentContainer = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.sizes.padding};
  background-color: ${({ theme }) => theme.colors.secondary};
`;  

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.sizes.margin};
`;

const MainContent = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: "Task 1", description: "Description for Task 1" },
    { id: uuidv4(), title: "Task 2", description: "Description for Task 2" },
    { id: uuidv4(), title: "Task 3", description: "Description for Task 3" },
  ]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <MainContentContainer>
      <Section>
        <h2>My Tasks</h2>
        {tasks.map(task => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            onDelete={() => handleDelete(task.id)}

          />
        ))}
      </Section>
    </MainContentContainer>
  );
};

export default MainContent;
