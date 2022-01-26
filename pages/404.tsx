import styled from 'styled-components';
import { transparentize } from 'polished';

export default function NotFound() {
  return (
    <Wrapper>
      <img src={'not-found.png'} alt="Not Found - 404" width={320} />
      <p>PÁGINA NÃO ENCONTRADA</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) =>
    p.theme.name == 'Matrix'
      ? p.theme.colors.primary['400']
      : p.theme.colors.primary['900']};

  p {
    padding: 12px;
    background-color: ${(p) =>
      p.theme.name == 'Matrix'
        ? transparentize(0.15, p.theme.colors.neutrals['900'])
        : transparentize(0.3, p.theme.colors.neutrals['200'])};
    font-size: 20px;
    font-weight: 700;
  }

  img {
    display: block;
    margin-top: -40px;
  }
`;
