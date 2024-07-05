import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: ${({ theme }) => theme.sizes.sidebarWidth};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 0 4px ${({ theme }) => theme.colors.shadow};
  padding: ${({ theme }) => theme.sizes.padding};
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
