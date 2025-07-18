import { generateToken } from '../utils/jwt.js';

const defaultUser = { id: 1, email: 'admin@admin.com', password: 'password' };
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === defaultUser.email && password === defaultUser.password) {
    const token = generateToken(defaultUser);
    res.status(200).json({ token });
  } else {
    res.sendStatus(401).json({ message: 'Credenciales inválidas' });
  }
};