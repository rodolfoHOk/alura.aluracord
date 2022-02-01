import {
  ChatContainer,
  MessagesContainer,
} from '../components/styles/Chat.styles';
import { ChatHeader } from '../components/ChatHeader/ChatHeader';
import { MessageInput } from '../components/MessageInput/MessageInput';
import { MessageList, Message } from '../components/MessageList/MessageList';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useAuth } from '../context/useAuth';
import { useRouter } from 'next/router';
import Toast from '../components/Toast/Toast';
import { Paragraph } from '../components/Typography/Paragraph';
import { api } from '../services/api';
import { supabaseClient } from '../utils/supabaseClient';

export default function Chat() {
  const theme = useTheme();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const [mensagem, setMensagem] = useState('');
  const [listaMensagens, setListaMensagens] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  async function fetchMessages() {
    setLoading(true);
    setSending(true);

    api.get<Message[]>(`/messages?themeName=${theme.name}`).then((response) => {
      if (response.status === 200) {
        setListaMensagens(response.data);
      } else {
        setErrorMessage(
          `Erro ao tentar buscar mensagens. Erro: ${response.status}`
        );
      }
      setLoading(false);
      setSending(false);
    });
  }

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

  function onSendClick() {
    addNewMessage(mensagem);
  }

  function addNewMessage(messageContent: string) {
    setValidationError('');

    if (messageContent.length > 1) {
      setSending(true);
      const novaMensagem: Message = {
        from: user.login,
        content: messageContent,
        theme: theme.name,
      };

      api.post('/messages', { novaMensagem }).then((response) => {
        if (response.status === 201) {
          setMensagem('');
        } else {
          setErrorMessage(
            `Erro ao tentar enviar nova mensagem. Erro: ${response.status}`
          );
        }
        setSending(false);
      });
    } else {
      setValidationError('Mensagem deve ter ao menos dois caracteres');
    }
  }

  function handleDeleteClick(id) {
    setSending(true);

    api.delete(`/messages/${id}`).then((response) => {
      if (response.status !== 200) {
        setErrorMessage(
          `Erro ao tentar excluir mensagem. Erro: ${response.status}`
        );
      }
      setSending(false);
    });
  }

  function onStickerClick(stickerSrc: string) {
    addNewMessage(`:sticker: ${stickerSrc}`);
  }

  function listenerMessagesInRealTime() {
    return supabaseClient
      .from<Message>('mensagens')
      .on('INSERT', (data) => {
        if (data.new.theme === theme.name) {
          setListaMensagens((valorAtualDaListaMensagens) => [
            data.new,
            ...valorAtualDaListaMensagens,
          ]);
        }
      })
      .on('DELETE', (data) => {
        setListaMensagens((valorAtualDaListaMensagens) =>
          valorAtualDaListaMensagens.filter(
            (mensagem) => mensagem.id !== data.old.id
          )
        );
      })
      .subscribe();
  }

  function onClose() {
    setErrorMessage('');
  }

  useEffect(() => {
    fetchMessages();
    listenerMessagesInRealTime();
  }, [theme]);

  useEffect(() => {
    if (user === null || user === undefined) {
      router.push('/');
    }
  }, [user]);

  return (
    <ChatContainer>
      <ChatHeader onLogout={signOut} />
      <MessagesContainer>
        <MessageList
          messages={listaMensagens}
          onDelete={handleDeleteClick}
          isLoading={loading}
        />
        <MessageInput
          value={mensagem}
          onChange={handleChangeMessageInput}
          onKeyPress={handleKeyPressMessageInput}
          onSendClick={onSendClick}
          onStickerClick={onStickerClick}
          isSending={sending}
        />
        {validationError && (
          <Paragraph
            size={4}
            style={{
              color: '#db0000',
              alignSelf: 'flex-start',
              padding: '2px 4px',
            }}
          >
            {validationError}
          </Paragraph>
        )}
      </MessagesContainer>
      <Toast
        success={false}
        show={!!errorMessage}
        duration={3000}
        message={errorMessage}
        onClose={onClose}
      />
    </ChatContainer>
  );
}
