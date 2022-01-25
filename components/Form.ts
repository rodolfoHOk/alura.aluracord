import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
