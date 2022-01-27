import {
  MessageListWrapper,
  ListItem,
  AvatarImage,
  DataSpan,
  DeleteButton,
} from './MessageList.styles';

export interface Message {
  id: number;
  from: string;
  content: string;
  timestamp: Date;
}

export interface MessageListProps {
  messages: Message[];
  onDelete: (number) => void;
}

export function MessageList({ messages, onDelete }: MessageListProps) {
  return (
    <MessageListWrapper>
      {messages.map((message) => (
        <ListItem key={message.id}>
          <div style={{ marginBottom: '8px' }}>
            <AvatarImage src={`https://github.com/vanessametonini.png`} />
            <strong>{message.from}</strong>
            <DataSpan>{message.timestamp.toLocaleString()}</DataSpan>
          </div>
          <DeleteButton onClick={() => onDelete(message.id)}>x</DeleteButton>
          {message.content}
        </ListItem>
      ))}
    </MessageListWrapper>
  );
}
