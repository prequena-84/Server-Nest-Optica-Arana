import type { IDiagnose } from "../diagnose/Idiagnose";

interface IResponseDiagnose {
    data?: IDiagnose | IDiagnose[] | null;
    message?:string | null ; 
}

export type {
    IResponseDiagnose,
}