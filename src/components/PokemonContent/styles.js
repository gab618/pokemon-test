import styled from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const PokemonCard = styled.div`
  background: #f0f0f0;
  color: var(--navy-blue);
  margin: 15px 0px;
  padding: 5px 20px;

  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: var(--blue);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--yellow);
`;

export const PrevButton = styled.button`
  width: 24px;
  height: 24px;
  background: var(--blue);
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 24px;
  height: 24px;
  background: var(--blue);
  margin-left: 8px;
  cursor: pointer;
`;
