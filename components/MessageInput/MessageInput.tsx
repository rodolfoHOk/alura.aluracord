import { TextareaHTMLAttributes, VideoHTMLAttributes } from 'react';
import {
  MessageInputWrapper,
  InputText,
  InputButton,
} from './MessageInput.styles';

export interface MessageInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSend: () => void;
}

export function MessageInput({ onSend, ...props }: MessageInputProps) {
  return (
    <MessageInputWrapper>
      <InputText placeholder="Insira sua mensagem aqui..." {...props} />
      <InputButton onClick={onSend}>Enviar</InputButton>
    </MessageInputWrapper>
  );
}
