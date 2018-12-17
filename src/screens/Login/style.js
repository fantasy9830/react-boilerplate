import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
  @media (min-width: 768px) {
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }
`;

export const Content = styled.div`
  padding: 32px 0;
  flex: 1;
  @media (min-width: 768px) {
    padding: 112px 0 24px 0;
  }
`;
