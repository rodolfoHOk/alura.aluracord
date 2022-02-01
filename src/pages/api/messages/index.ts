import { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '../../../components/MessageList/MessageList';
import { supabaseClient } from '../../../utils/supabaseClient';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization;

  if (verifyAuthentication(token)) {
    switch (req.method) {
      case 'GET':
        const { themeName } = req.query;
        if (themeName) {
          await supabaseClient
            .from<Message>('mensagens')
            .select('*')
            .eq('theme', themeName as string)
            .order('id', { ascending: false })
            .then(({ status, data }) => {
              res.status(status).json(data);
            });
        } else {
          res.status(400).json({ error: 'Requisição Inválida' });
        }
        break;

      case 'POST':
        const { novaMensagem } = req.body;
        await supabaseClient
          .from<Message>('mensagens')
          .insert(novaMensagem)
          .then(({ status, data }) => {
            if (status === 201) {
              res.status(status).json(data[0]);
            } else {
              res
                .status(status)
                .json({ error: 'Erro ao tentar enviar nova mensagem' });
            }
          });
        break;

      default:
        res.status(405).json({ error: 'Método não permitido' });
    }
  } else {
    res.status(401).json({ error: 'Acesso não autorizado' });
  }
};
