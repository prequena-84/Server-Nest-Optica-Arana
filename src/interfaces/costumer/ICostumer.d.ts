import type { TIdCostumer,TUserName, TPassword, TNationality,TDocument } from "src/types/costumer/TCostumer";

interface ICostumer {
    idCostumer:TIdCostumer;
    userName?:TUserName | null;
    password?:TPassword | null;
    name:string;
    lastName:string;
    typeDocument:TDocument;
    numberDocument:number | null;
    nationality?:TNationality | null;
    age: number;
    address: string;
    email?:string | null;
    telefono?:string | null;
    tokenConfirmacion?:string | null;
    sessionExpiration?:number | null;
}

export type {
    ICostumer,
}