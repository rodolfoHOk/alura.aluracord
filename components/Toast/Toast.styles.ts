import styled from 'styled-components';

interface ToastWrapperProps {
  success: boolean;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  top: 20%;
  right: 10%;
  z-index: 25;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300;
  border: 2px solid ${(p) => (p.success ? 'green' : '#d90000')};
  border-radius: 6px;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  -webkit-box-shadow: 5px 5px 20px -3px #000000;
  box-shadow: 5px 5px 20px -3px #000000;
  p {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    color: ${(p) => p.theme.colors.neutrals['100']};
  }
  button {
    background-color: ${(p) => (p.success ? 'green' : '#d90000')};
    font-size: 16px;
    height: 100%;
    min-height: 33px;
    min-width: 32px;
    outline: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    color: ${(p) => p.theme.colors.neutrals['100']};
    transition: background-color 0.3s;
    &:hover {
      background-color: ${(p) => (p.success ? 'green' : '#d9000055')};
    }
  }
`;
