import { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '../../../components/MessageList/MessageList';
import { supabaseClient } from '../../../utils/supabaseClient';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization;

  if (verifyAuthentication(token)) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
      supabaseClient
        .from<Message>('mensagens')
        .delete()
        .eq('id', id as string)
        .then(({ status, data }) => {
          res.status(status).json(data);
        });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  } else {
    res.status(401).json({ error: 'Não autorizado' });
  }
};
