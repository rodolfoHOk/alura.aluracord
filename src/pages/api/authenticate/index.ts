import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { sign } from 'jsonwebtoken';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.body;

  try {
    const result = await Authenticate(code);
    return res.json(result);
  } catch (e) {
    return res.json({ error: e.message });
  }
};

interface AccessTokenResponse {
  access_token: string;
}

export interface User {
  id?: number;
  login: string;
  avatar_url?: string;
  html_url?: string;
  name: string;
  location?: string;
  bio?: string;
}

async function Authenticate(code: string) {
  const url = 'https://github.com/login/oauth/access_token';

  const { data } = await axios.post<AccessTokenResponse>(url, null, {
    params: {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    },
    headers: {
      Accept: 'application/json',
    },
  });

  const response = await axios.get<User>('https://api.github.com/user', {
    headers: {
      authorization: `Bearer ${data.access_token}`,
    },
  });

  const user: User = response.data;

  const token = sign(
    {
      user: {
        id: user.id,
        username: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
      },
    },
    process.env.JWT_SECRET,
    {
      subject: user.id.toString(),
      expiresIn: '1d',
    }
  );

  return { user, token };
}
