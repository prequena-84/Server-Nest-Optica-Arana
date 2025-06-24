import type { IDiagnose } from "../diagnose/Idiagnose";
import type { ICostumer } from "../costumer/ICostumer";
import type { IUser } from "../users/IUser";

interface IReportCostumer extends ICostumer {
    Diagnoses: IDiagnose;
    User:IUser;
}

export type {
    IReportCostumer,
}