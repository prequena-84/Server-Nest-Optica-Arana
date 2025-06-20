import type { TIdUser } from "src/types/users/TUsers";

interface IUser {
    idUser:TIdUser;
    password:string;
    userName:string;
    name:string;
    lastName:string;
    email:string;
    telefono?:string | null;
    tokenConfirmacion?:string | null;
    sessionExpiration?:number | null;
}

export type {
   IUser,
}