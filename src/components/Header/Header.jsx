import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.padding};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.shadow};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.placeholder}; 
  margin-right: 15px;
  border-radius: 4px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 30px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 5px;
  width: 200px;
`;

const SearchIconPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.secondary}; 
  margin-left: 10px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <MenuIconPlaceholder />
        <h1>Dashboard</h1>
      </HeaderLeft>
      <HeaderRight>
        <SearchInput type="text" placeholder="Search Task ..." />
        <SearchIconPlaceholder />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
