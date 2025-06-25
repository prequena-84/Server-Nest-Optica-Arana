import keyJWT from '../helpers/secretkey';
import type { TUserName } from 'src/types/users/users.type';
import type { TGenerateToken } from 'src/types/middleware/jwt';
import * as jwt from 'jsonwebtoken';

const secretKey = process.env.secretKey || keyJWT();

const generateToken = ( userName:TUserName ): TGenerateToken => {
    const options: jwt.SignOptions = { expiresIn: '1m' };
    return jwt.sign({ userName }, secretKey, options);
}

const validateToken = ( token: string ): TGenerateToken | jwt.JwtPayload | null => {
    const decoded = jwt.verify(token, secretKey);
    return decoded
};

export default {
    generateToken,
    validateToken
};