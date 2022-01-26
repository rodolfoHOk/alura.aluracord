import { transparentize } from 'polished';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { Select, Option } from './Select';
import * as themes from '../styles/themes';

export interface TemaContainerProps {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}

export default function TemaContainer({ setTheme }: TemaContainerProps) {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState(theme.name);

  const options: Option[] = [
    { value: theme.name, label: 'Selecione o tema' },
    { value: 'matrix', label: 'Matrix' },
    { value: 'mushoku', label: 'Mushoku Tensei' },
  ];

  useEffect(() => {
    if (themes[selectedOption] != null) setTheme(themes[selectedOption]);
  }, [selectedOption]);

  return (
    <TemaContainerWrapper>
      <form>
        <Select
          options={options}
          onChange={setSelectedOption}
          defaultValue={theme.name}
        />
      </form>
    </TemaContainerWrapper>
  );
}

const TemaContainerWrapper = styled.div`
  position: fixed;
  top: 24px;
  left: 24px;
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => transparentize(0.1, p.theme.colors.neutrals[600])};
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    top: 8px;
    left: 16px;
  }
`;
