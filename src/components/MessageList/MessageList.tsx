import 'react-loading-skeleton/dist/skeleton.css';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MouseEvent, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { useAuth } from '../../context/useAuth';
import { IconButton } from '../IconButton/IconButton';
import { Paragraph } from '../Typography/Paragraph';
import {
  MessageListWrapper,
  ListItem,
  AvatarImage,
  DataSpan,
  UserInfo,
  LoadingUserInfo,
  Photo,
  StickerImage,
} from './MessageList.styles';

export interface Message {
  id?: number;
  from: string;
  content: string;
  theme?: string;
  created_at?: Date;
}

export interface MessageListProps {
  messages: Message[];
  onDelete: (id: number) => void;
  isLoading: boolean;
}

export function MessageList({
  messages,
  onDelete,
  isLoading,
}: MessageListProps) {
  const { user } = useAuth();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [userInfos, setUserInfos] = useState<any>({});
  const [loading, setLoading] = useState(false);

  function handleAvatarMouseEvent(
    event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>,
    username: string
  ) {
    if (event.type === 'mouseenter') {
      setShowUserInfo(true);
      if (userInfos !== null && userInfos.login !== username) {
        fetchUserInfos(username);
      }
    } else if (event.type === 'mouseleave') {
      setShowUserInfo(false);
    }
  }

  async function fetchUserInfos(username: string) {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfos = await response.json();
    setUserInfos(userInfos);
    setLoading(false);
  }

  return (
    <MessageListWrapper>
      {isLoading
        ? [1, 2, 3].map((number) => (
            <ListItem key={number}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Skeleton
                  circle
                  baseColor={'#313D49'}
                  height={20}
                  width={20}
                  style={{ marginBottom: '8px' }}
                />
                <Skeleton
                  baseColor={'#313D49'}
                  width={300}
                  height={14}
                  style={{ marginBottom: '8px' }}
                />
              </div>
              <Skeleton
                baseColor={'#313D49'}
                width={'80%'}
                height={14}
                style={{ marginBottom: '1px' }}
              />
            </ListItem>
          ))
        : messages.map((message) => (
            <ListItem key={message.id}>
              <div style={{ marginBottom: '8px' }}>
                <AvatarImage
                  src={`https://github.com/${message.from}.png`}
                  onMouseEnter={(event) =>
                    handleAvatarMouseEvent(event, message.from)
                  }
                  onMouseLeave={(event) =>
                    handleAvatarMouseEvent(event, message.from)
                  }
                />
                <strong>{message.from}</strong>
                <DataSpan>
                  {format(new Date(message.created_at), 'd MMM yyyy HH:mm', {
                    locale: ptBR,
                  })}
                </DataSpan>
              </div>
              {user && user.login === message.from && (
                <IconButton
                  icon={<FaRegTrashAlt />}
                  onClick={() => onDelete(message.id as number)}
                />
              )}
              {message.content.startsWith(':sticker:') ? (
                <StickerImage
                  src={message.content.replace(':sticker:', '').trim()}
                />
              ) : (
                message.content
              )}
            </ListItem>
          ))}
      {showUserInfo &&
        (loading ? (
          <LoadingUserInfo>
            <Skeleton
              baseColor={'#313D49'}
              width={148}
              height={148}
              borderRadius={16}
            />
            <Skeleton baseColor={'#313D49'} width={130} height={14} />
            <Skeleton baseColor={'#313D49'} width={80} height={10} />
            <Skeleton baseColor={'#313D49'} width={100} height={10} />
          </LoadingUserInfo>
        ) : (
          <UserInfo>
            <Photo src={userInfos.avatar_url} />
            <Paragraph size={2}>{userInfos.name}</Paragraph>
            <Paragraph size={4}>({userInfos.login})</Paragraph>
            <Paragraph size={4}>{userInfos.location}</Paragraph>
          </UserInfo>
        ))}
    </MessageListWrapper>
  );
}
