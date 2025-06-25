import type { IDiagnose } from "../diagnose/diagnose.interface";
import type { ICostumer } from "../costumer/costumer.interface";
import type { IUser } from "../users/user.interface";

interface IReportCostumer extends ICostumer {
    Diagnoses: IDiagnose;
    User:IUser;
}

export type {
    IReportCostumer,
}