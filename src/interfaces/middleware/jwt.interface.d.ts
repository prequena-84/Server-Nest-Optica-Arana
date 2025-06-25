import type { TUserName } from "src/types/users/users.type";
import type { TIat,TExp } from "src/types/middleware/jwt";

interface IDecodedToken {
    userName: TUserName;
    iat: TIat;
    exp: TExp;
}

export type {
    IDecodedToken,
}