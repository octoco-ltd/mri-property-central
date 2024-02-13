import axios, { AxiosInstance, AxiosResponse } from 'axios';

import * as types from "./types";
import {Tenant} from "./types";

const baseURLV1 = 'https://api.mdapropsys.com/api/v1';

export class ApiClientV1 {
    private axiosInstance: AxiosInstance;

    constructor(authToken: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURLV1,
            headers: {
                Authorization: `Basic ${authToken}`
            }
        });
    }

    async getTenants<T>(): Promise<Tenant[]> {
        const response: AxiosResponse<Tenant[]> = await this.axiosInstance.get<Tenant[]>(`/Tenants`);
        return response.data;
    }
}