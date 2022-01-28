import { TextareaHTMLAttributes, VideoHTMLAttributes } from 'react';
import { FaSync } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { MessageInputWrapper, TextInput } from './MessageInput.styles';

export interface MessageInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSend: () => void;
  isSending: boolean;
}

export function MessageInput({
  onSend,
  isSending,
  ...props
}: MessageInputProps) {
  return (
    <MessageInputWrapper>
      <TextInput placeholder="Insira sua mensagem aqui..." {...props} />
      <Button
        size={'large'}
        onClick={onSend}
        label={isSending ? <FaSync className="spinner" /> : 'Enviar'}
      />
    </MessageInputWrapper>
  );
}
