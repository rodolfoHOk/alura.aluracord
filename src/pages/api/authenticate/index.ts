import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { code } = request.body;

  try {
    const result = await Authenticate(code);
    return response.json(result);
  } catch (e) {
    return response.json({ error: e.message });
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

  const user = response.data;
  const token = data.access_token;

  return { user, token };
}
