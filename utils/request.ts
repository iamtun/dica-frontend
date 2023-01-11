import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseConfig = {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
    timeout: 10000,
    withCredentials: true,
};

class Request {
    instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        this.instance.interceptors.response.use((res: AxiosResponse) => {
            const { status, data } = res.data;

            if (status === 204) {
                // no content
                return true;
            }

            return data;
        });
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config);
    }
}

export default new Request(baseConfig);
