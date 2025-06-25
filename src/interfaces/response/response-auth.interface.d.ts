import type { TToken } from "src/types/auth/auth.type"

interface IResponseAuth {
    data: TToken,
    message:string,
};

export type {
    IResponseAuth,
}