import type { IReportCostumer } from "../report/IReportCostumer"

interface IResponseReportCostumer {
    data?: IReportCostumer | IReportCostumer[] | null | undefined ;
    message?: string;
}

export type {
    IResponseReportCostumer,
}