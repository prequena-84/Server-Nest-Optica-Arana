import type { IReportDiagnoses } from "../report/report-diagnose.interface";

interface IResponseReportDiagnose {
    data?: IReportDiagnoses | IReportDiagnoses[] | null | undefined ;
    message?: string;
}

export type {
    IResponseReportDiagnose,
}