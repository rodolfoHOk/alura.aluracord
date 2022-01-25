import { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

export interface ParagraphProps {
  style?: CSSProperties;
  size: 1 | 2 | 3 | 4;
  children: ReactNode;
}

export function Paragraph({ size, style, children }: ParagraphProps) {
  const StyledParagraph = {
    1: ParagraphSize1,
    2: ParagraphSize2,
    3: ParagraphSize3,
    4: ParagraphSize4,
  }[size];
  return <StyledParagraph style={style}>{children}</StyledParagraph>;
}

const ParagraphSize1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`;

const ParagraphSize2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
`;

const ParagraphSize3 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

const ParagraphSize4 = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;
