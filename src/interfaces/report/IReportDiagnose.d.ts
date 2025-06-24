import type { IDiagnose } from "../diagnose/Idiagnose";
import type { ICostumer } from "../costumer/ICostumer";
import type { IUser } from "../users/IUser";

interface IReportDiagnoses extends IDiagnose {
    Costumer: ICostumer;
    User: IUser;
}

export type {
    IReportDiagnoses,
}