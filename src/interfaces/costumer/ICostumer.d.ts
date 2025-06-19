import type { TIdCostumer,TUserName, TPassword } from "src/types/costumer/TCostumer";

interface ICostumer {
    idCostumer:TIdCostumer;
    userName?:TUserName | null;
    Passaword?:TPassword | null;
    name:string;
    lastName:string;
    document:string;
    nationality?:string | null;
    rif?:string | null;
    age: number;
    address: string;
    email:string;
    telefono:string;
    tokenConfirmacion?:string | null;
    sessionExpiration?:number | null;
}

export type {
    ICostumer,
}