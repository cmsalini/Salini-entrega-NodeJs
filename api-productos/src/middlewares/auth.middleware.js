import { verifyToken } from '../utils/jwt.js';

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401).json({ message: 'Token requerido' });
    const verificationResult = verifyToken(token);
    if (!verificationResult.valid) return res.status(403).json({ message: verificationResult.message });
    req.user = verificationResult.decoded;
    next();
};