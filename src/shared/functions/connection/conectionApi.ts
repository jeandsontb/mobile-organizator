import axios, { AxiosRequestConfig } from "axios";
import { MethodEnum } from "../../../enums/method.enums";
import { getAuthorizationToken } from "./auth";

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch' ;

export default class ConnectionApi {
	static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T>{

		const token = await getAuthorizationToken();

		const config: AxiosRequestConfig = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			}
		}

		switch (method) {
			case MethodEnum.DELETE:
			case MethodEnum.GET:
				return (await axios[method]<T>(url, config)).data;
				case MethodEnum.POST:
				case MethodEnum.PUT:
				case MethodEnum.PATCH:
			default:
				return (await axios[method]<T>(url, body, config)).data;
		}
	}

	static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
		return this.call<T>(url, method, body).catch((error) => {
			if(error.response) {
				switch (error.response.status) {
					case 401:
					case 403:
						throw new Error('Sem permissão')
					default:
						throw new Error('Sem conexão com a base de dados.')
				}
			}
			throw new Error('Sem conexão com a base de dados.')
		});
	}
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
	return ConnectionApi.connect(url, MethodEnum.GET);
}

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
	return ConnectionApi.connect(url, MethodEnum.DELETE);
}

export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
	return ConnectionApi.connect(url, MethodEnum.POST, body);
}

export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
	return ConnectionApi.connect(url, MethodEnum.PUT, body);
}

export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
	return ConnectionApi.connect(url, MethodEnum.PATCH, body);
}