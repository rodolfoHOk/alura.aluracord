import styled from 'styled-components';

export const MessageInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const InputText = styled.textarea`
  width: 100%;
  height: 60px;
  border: 0;
  resize: none;
  border-radius: 5px;
  padding: 6px 8px;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  margin-right: 12px;
  color: ${(p) => p.theme.colors.neutrals[200]};
`;

export const InputButton = styled.button`
  height: 64px;
  width: 64px;
  background-color: ${(p) => p.theme.colors.primary[500]};
  border-color: ${(p) => p.theme.colors.primary[500]};
  color: ${(p) => p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary[600]};
  }
`;
