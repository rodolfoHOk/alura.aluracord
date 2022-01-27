import { TemaContainerWrapper } from './TemaSelection.styles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import { Select, Option } from '../Select/Select';
import * as themes from '../../styles/themes';

export interface TemaSelectionProps {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}

export default function TemaSelection({ setTheme }: TemaSelectionProps) {
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
