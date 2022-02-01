import axios from 'axios';

const apiUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000/api'
    : 'https://alura-aluracord-rodolfohok.vercel.app/';

export const api = axios.create({
  baseURL: apiUrl,
});
