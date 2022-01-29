import { TextareaHTMLAttributes } from 'react';
import { FaSync } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { Button } from '../Button/Button';
import { Actions, MessageInputWrapper, TextInput } from './MessageInput.styles';
import { ButtonSendSticker } from '../ButtonSendSticker/ButtonSendSticker';

export interface MessageInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSendClick: () => void;
  isSending: boolean;
  onStickerClick: (sticker: string) => void;
}

export function MessageInput({
  onSendClick,
  isSending,
  onStickerClick,
  ...props
}: MessageInputProps) {
  return (
    <MessageInputWrapper>
      <TextInput placeholder="Insira sua mensagem aqui..." {...props} />
      <Actions>
        <Button
          size={'large'}
          onClick={onSendClick}
          label={
            isSending ? (
              <FaSync className="spinner" size={20} />
            ) : (
              <BiSend size={28} />
            )
          }
        />
        <ButtonSendSticker onStickerClick={onStickerClick} />
      </Actions>
    </MessageInputWrapper>
  );
}
