import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarListItem = styled.li`
  margin: 10px 0;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarListItem>Dashboard</SidebarListItem>
        <SidebarListItem>Projects</SidebarListItem>
        <SidebarListItem>Calendar</SidebarListItem>
        <SidebarListItem>Settings</SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
