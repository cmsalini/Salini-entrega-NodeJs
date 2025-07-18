import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET;

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    const expiration = { expiresIn: '1h' };
    return jwt.sign(user, SECRET, expiration);
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET);
        return {valid: true, payload: decoded};
    } catch (error) {
        return {valid: false, message: error.message};
    }
};
