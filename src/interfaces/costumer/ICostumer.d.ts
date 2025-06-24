import type {     
    TIdCostumer,
    TUserName,
    TPassword,
    TName,
    TLastName,
    TTypeDocument,
    TNumberDocument,
    TNationality,
    TAge,
    TAddress,
    TEmail,
    TTelefono,
    TTokenConfirmacion,
    TSessionExpiration 
} from "src/types/costumer/TCostumer";

interface ICostumer {
    idCostumer:TIdCostumer;
    userName?:TUserName | null;
    password?:TPassword | null;
    name:TName;
    lastName:TLastName;
    typeDocument:TTypeDocument;
    numberDocument:TNumberDocument | null;
    nationality?:TNationality | null;
    age: TAge;
    address: TAddress;
    email?:TEmail | null;
    telefono?:TTelefono | null;
    tokenConfirmacion?:TTokenConfirmacion | null;
    sessionExpiration?:TSessionExpiration | null;
}

export type {
    ICostumer,
}