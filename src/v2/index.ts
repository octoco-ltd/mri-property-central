import axios, { AxiosInstance, AxiosResponse } from 'axios';
import qs  from "querystring";

import * as types from './types'

const baseURLV2 = 'https://api.mdapropsys.com/api/v2';



export class ApiClientV2 {
    private axiosInstance: AxiosInstance;
    private accessToken: string | null = null;
    private databaseIdentifier: string | null = null;
    private username: string | null = null;
    private password: string | null = null;


    constructor(databaseIdentifier: string, username: string, password: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURLV2,
        });

        this.databaseIdentifier = databaseIdentifier;
        this.username = username;
        this.password = password;

        // Add a request interceptor to set the Authorization header
        this.axiosInstance.interceptors.request.use(config => {
            if (this.accessToken && !config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${this.accessToken}`;
                config.headers.DatabaseIdentifier = databaseIdentifier;
            }
            return config;
        });
    }


    async authenticate(): Promise<void> {
        try {
            const formData = {
                scope: '',
                grant_type: 'password',
                username: this.username,
                password: this.password,
            };

            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            const response = await this.axiosInstance.post('/Token',qs.stringify(formData), { headers } );
            this.accessToken = response.data.access_token;
        } catch (error) {
            console.log(error);
            throw new Error('Authentication failed');
        }
    }



    async searchProperties(filter: types.PropertySearchFilter): Promise<types.PaginationResponse<types.PropertyListItem>> {
        try {
            const response: AxiosResponse<types.PaginationResponse<types.PropertyListItem>> = await this.axiosInstance.post('/Properties/SearchProperties', { filter });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async searchTenants(filter: types.TenantSearchFilters): Promise<types.PaginationResponse<types.TenantListItem>> {
        try {
            const response: AxiosResponse<types.PaginationResponse<types.TenantListItem>> = await this.axiosInstance.post('/Tenants/SearchTenants', { filter });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
