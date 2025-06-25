import type { IDiagnose } from "../diagnose/diagnose.interface";
import type { ICostumer } from "../costumer/costumer.interface";
import type { IUser } from "../users/user.interface";

interface IReportDiagnoses extends IDiagnose {
    Costumer: ICostumer;
    User: IUser;
}

export type {
    IReportDiagnoses,
}