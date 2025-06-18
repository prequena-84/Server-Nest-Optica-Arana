import type { TIdUser } from "src/types/users/TUsers";

interface IUser {
    idUser:TIdUser;
    Password:string;
    userName:string;
    Name:string;
    lastName:string;
    Email:string;
    Telefono?:string | null;
    tokenConfirmacion?:string | null;
    sessionExpiration?:number | null;
}

export type {
   IUser,
}