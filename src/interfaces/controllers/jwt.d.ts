import type { TUserName } from "src/types/users/TUsers";
import type { TIat,TExp } from "src/types/controllers/jwt";

interface IDecodedToken {
    userName: TUserName;
    iat: TIat;
    exp: TExp;
}

export type {
    IDecodedToken,
}