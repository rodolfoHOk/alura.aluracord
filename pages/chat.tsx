import {
  ChatContainer,
  MessagesContainer,
} from '../components/styles/Chat.styles';
import { ChatHeader } from '../components/ChatHeader/ChatHeader';
import { MessageInput } from '../components/MessageInput/MessageInput';
import { MessageList, Message } from '../components/MessageList/MessageList';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

export default function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [listaMensagens, setListaMensagens] = useState<Message[]>([]);

  function handleChangeMessageInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setMensagem(event.target.value);
  }

  function handleKeyPressMessageInput(
    event: KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addNewMessage(mensagem);
    }
  }

  function onClickSend() {
    addNewMessage(mensagem);
  }

  function addNewMessage(messageContent: string) {
    const novaMensagem: Message = {
      id: new Date().getTime(),
      from: 'vanessametonini',
      content: messageContent,
      timestamp: new Date(),
    };
    setListaMensagens([novaMensagem, ...listaMensagens]);
    setMensagem('');
  }

  function handleDeleteClick(id) {
    const novaLista = listaMensagens.filter((mensagem) => mensagem.id !== id);
    setListaMensagens(novaLista);
  }

  return (
    <ChatContainer>
      <ChatHeader />
      <MessagesContainer>
        <MessageList messages={listaMensagens} onDelete={handleDeleteClick} />
        <MessageInput
          value={mensagem}
          onChange={handleChangeMessageInput}
          onKeyPress={handleKeyPressMessageInput}
          onSend={onClickSend}
        />
      </MessagesContainer>
    </ChatContainer>
  );
}
