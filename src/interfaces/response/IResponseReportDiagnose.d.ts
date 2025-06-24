import type { IReportDiagnoses } from "../report/IReportDiagnose";

interface IResponseReportDiagnose {
    data?: IReportDiagnoses | IReportDiagnoses[] | null | undefined ;
    message?: string;
}

export type {
    IResponseReportDiagnose,
}