import { TextareaHTMLAttributes } from 'react';
import { FaSync } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { Button } from '../Button/Button';
import {
  Actions,
  AvatarImage,
  InputContainer,
  MessageInputWrapper,
  TextInput,
} from './MessageInput.styles';
import { ButtonSendSticker } from '../ButtonSendSticker/ButtonSendSticker';
import { useAuth } from '../../context/useAuth';

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
  const { user } = useAuth();

  return (
    <MessageInputWrapper>
      <InputContainer>
        <AvatarImage src={user.avatar_url} />
        <TextInput placeholder="Insira sua mensagem aqui..." {...props} />
      </InputContainer>
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
