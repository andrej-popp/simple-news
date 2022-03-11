import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IDefaultErrorHandlersBreaker {
	unauthorized?: false;
	forbidden?: false;
	timeout?: false;
	serverError?: false;
	notFound?: false;
	badRequest?: false;
	dataDuplication?: false;
}

export const createInstance = (
	config?: AxiosRequestConfig,
	breaker: IDefaultErrorHandlersBreaker = {},
	handlers: ((instance: AxiosInstance) => AxiosInstance)[] = []
) => {
	const api = axios.create(Object.assign({}, config));
	breaker.unauthorized !== false && console.log('unauthorized', api);
	breaker.forbidden !== false && console.log('forbidden', api);
	breaker.timeout !== false && console.log('timeout', api);
	breaker.serverError !== false && console.log('serverError', api);
	breaker.notFound !== false && console.log('notFound', api);
	breaker.badRequest !== false && console.log('badRequest', api);
	breaker.dataDuplication !== false && console.log('dataDuplication', api);
	handlers.forEach(handler => handler(api));
	return api;
};

