import type { ICostumer } from "../costumer/ICostumer";

interface IResponseCostumer {
    data?: ICostumer | ICostumer[] | null;
    message?:string | null ; 
}

export type {
    IResponseCostumer,
}