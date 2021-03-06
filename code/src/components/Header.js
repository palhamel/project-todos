import React from "react";
import moment from "moment";

import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";

import styled from "styled-components";
import { ButtonClear } from "../lib/Button";

export const Header = () => {
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(tasks.actions.removeAllTasks());
  };

  return (
    <Container>
      <ContainerLeft>
        <HeaderText> My Things To do </HeaderText>
        <DateText>{moment().format("MMMM Do, Y")}</DateText>
      </ContainerLeft>
      <ContainerRight>
        <ContainerButton>
          {/* // Clear all to dos in list */}
          <ButtonClear onClick={handleClearList}>CLEAR LIST</ButtonClear>
        </ContainerButton>
      </ContainerRight>
    </Container>
  );
};


const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #46539e;
  padding: 20px;
  margin: 0;
  height: 80px;
  @media (min-width: 668px) {
    height: 120px;
  },
`;
const ContainerLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* height: 120px; */
  width: 150px;
`;
const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContainerButton = styled.div`
  margin-top: 90px;
`;
const HeaderText = styled.p`
  font-size: 28px;
  font-weight: 200;
  color: #efebe9;
  margin: 0px 0px 5px 0px;
  @media (min-width: 668px) {
    font-size: 34px;
  },
`;
const DateText = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: #efebe9;
  margin: 0;
`;

