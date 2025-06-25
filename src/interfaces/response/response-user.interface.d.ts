import type { IUser } from "../users/user.interface";

interface IResponseUser {
    data?:IUser | IUser[] | null;
    message?:string | null;
}

export type {
    IResponseUser,
}