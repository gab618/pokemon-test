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
