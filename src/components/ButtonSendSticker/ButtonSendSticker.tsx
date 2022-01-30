import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Paragraph } from '../Typography/Paragraph';
import {
  ButtonSticker,
  SendStickerWrapper,
  StickerImage,
  StickerItem,
  StickerModal,
  StickersList,
} from './ButtonSendSticker.styles';
import appConfig from '../../../config.json';

export interface ButtonSendStickerProps {
  onStickerClick: (sticker: string) => void;
}

export function ButtonSendSticker({ onStickerClick }: ButtonSendStickerProps) {
  const [isOpen, setOpenState] = useState(false);
  const theme = useTheme();

  return (
    <SendStickerWrapper>
      <ButtonSticker isOpen={isOpen} onClick={() => setOpenState(!isOpen)}>
        "😋"
      </ButtonSticker>
      {isOpen && (
        <StickerModal onClick={() => setOpenState(false)}>
          <Paragraph
            size={2}
            style={{
              color: theme.colors.neutrals['000'],
              fontWeight: 'bold',
            }}
          >
            Stickers
          </Paragraph>
          <StickersList>
            {appConfig.stickers.map((sticker) => (
              <StickerItem onClick={() => onStickerClick(sticker)}>
                <StickerImage src={sticker} />
              </StickerItem>
            ))}
          </StickersList>
        </StickerModal>
      )}
    </SendStickerWrapper>
  );
}
