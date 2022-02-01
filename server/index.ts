import express, { Express } from 'express';
import { createServer, Server as HttpServer } from 'http';
import next, { NextApiHandler } from 'next';
import { NextServer } from 'next/dist/server/next';
import { Server as WebSocketServer, Socket } from 'socket.io';
import { Message } from '../src/components/MessageList/MessageList';
import { createClient } from '@supabase/supabase-js';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';

const nextApp: NextServer = next({ dev });
const nextHandle: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app: Express = express();
  const httpServer: HttpServer = createServer(app);

  const io: WebSocketServer = new WebSocketServer(httpServer);
  io.on('connection', (socket: Socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
  });

  app.all('*', (req: any, res: any) => nextHandle(req, res));

  createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANOM_KEY)
    .from<Message>('mensagens')
    .on('INSERT', (data) => {
      io.emit('nova-mensagem', data.new);
    })
    .on('DELETE', (data) => {
      io.emit('mensagem-removida', data.old);
    })
    .subscribe();

  httpServer.listen(port, () => {
    () => console.log(`Server is running on PORT ${port}`);
  });
});
