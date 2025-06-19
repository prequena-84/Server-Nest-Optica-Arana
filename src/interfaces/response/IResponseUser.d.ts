import type { IUser } from "../users/IUser";

interface IResponseUser {
    data?:IUser | IUser[] | null;
    message?:string | null;
}

export type {
    IResponseUser,
}