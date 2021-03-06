import { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

export interface TitleProps {
  style?: CSSProperties;
  level: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
}

export function Title({ level, style, children }: TitleProps) {
  const Heading = {
    1: Heading1,
    2: Heading2,
    3: Heading3,
    4: Heading4,
    5: Heading5,
  }[level];
  return <Heading style={style}>{children}</Heading>;
}

const Heading1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const Heading4 = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;

const Heading5 = styled.h3`
  font-size: 14px;
  font-weight: 700;
`;
