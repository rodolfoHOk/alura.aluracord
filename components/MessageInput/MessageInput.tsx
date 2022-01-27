import { TextareaHTMLAttributes, VideoHTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { MessageInputWrapper, TextInput } from './MessageInput.styles';

export interface MessageInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSend: () => void;
}

export function MessageInput({ onSend, ...props }: MessageInputProps) {
  return (
    <MessageInputWrapper>
      <TextInput placeholder="Insira sua mensagem aqui..." {...props} />
      <Button size={'large'} onClick={onSend} label={'Enviar'} />
    </MessageInputWrapper>
  );
}
