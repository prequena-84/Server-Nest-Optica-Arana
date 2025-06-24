import type { 
    TIdUser, 
    TPassword,
    TUserName,
    TName,
    TLastName,
    TEmail,
    TTelefono,
    TTokenConfirmacion,
    TSessionExpiration
} from "src/types/users/TUsers";

interface IUser {
    idUser:TIdUser;
    password:TPassword;
    userName:TUserName;
    name:TName;
    lastName:TLastName;
    email:TEmail;
    telefono?:TTelefono | null;
    tokenConfirmacion?:TTokenConfirmacion | null;
    sessionExpiration?:TSessionExpiration | null;
}

export type {
   IUser,
}