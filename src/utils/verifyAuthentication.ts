import { verify } from 'jsonwebtoken';

export function verifyAuthentication(
  bearerToken: string | undefined | null
): boolean {
  if (bearerToken) {
    const token = bearerToken.split(' ')[1];
    try {
      const decodedToken = verify(token, process.env.JWT_SECRET);
      if (decodedToken.sub) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }
  return false;
}
