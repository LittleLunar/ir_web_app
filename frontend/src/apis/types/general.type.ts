import { Canceler } from "axios";

export interface IReturnData {
  code: number;
  message: string;
  data: any;
}

export interface IPayload {
  axiosCanceler: Canceler;
}

export interface IPaginationParam {
  page?: number;
  size?: number;
  limit?: number;
  offset?: number;
}
