import type { ICostumer } from "../costumer/costumer.interface";

interface IResponseCostumer {
    data?: ICostumer | ICostumer[] | null;
    message?:string | null ; 
}

export type {
    IResponseCostumer,
}