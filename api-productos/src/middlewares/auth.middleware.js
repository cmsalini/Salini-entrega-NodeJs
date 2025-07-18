import { verifyToken } from '../utils/jwt.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token requerido' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token requerido' });
  }
  const verificationResult = verifyToken(token);
  if (!verificationResult.valid) {
    return res.status(403).json({ message: verificationResult.message });
  }
  req.user = verificationResult.decoded;
  next();
};