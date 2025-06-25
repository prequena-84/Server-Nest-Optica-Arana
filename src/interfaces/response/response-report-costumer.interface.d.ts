import type { IReportCostumer } from "../report/report-costumer.interface"

interface IResponseReportCostumer {
    data?: IReportCostumer | IReportCostumer[] | null | undefined ;
    message?: string;
}

export type {
    IResponseReportCostumer,
}