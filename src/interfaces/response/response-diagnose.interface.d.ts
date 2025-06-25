import type { IDiagnose } from "../diagnose/diagnose.interface";

interface IResponseDiagnose {
    data?: IDiagnose | IDiagnose[] | null | undefined;
    message?:string | null ; 
}

export type {
    IResponseDiagnose,
}