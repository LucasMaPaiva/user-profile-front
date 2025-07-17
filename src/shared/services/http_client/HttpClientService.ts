import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type { IHttpClientService } from './interfaces/IHttpClientService.ts'

export class HttpClientService implements IHttpClientService {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8089/api/v1',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      },
    })
  }

  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.api.get<T>(url, config)
  }

  post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.api.post<T>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.api.put<T>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.api.delete<T>(url, config)
  }
}
