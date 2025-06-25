import type { TToken } from "src/types/auth/TAuth"

interface IResponseAuth {
    data: TToken,
    message:string,
};

export type {
    IResponseAuth,
}