import { createInstance } from '../../../api';

const api = createInstance({ baseURL: 'https://newsapi.org/v2/' })


interface ApiKey {
  apiKey: string;
}

export interface IEverythingRequest extends ApiKey {
  q: string,
  from: string,
}
export type Article = {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface IEverythingResponse {
  status: string,
  totalResults: 193270,
  articles: Article[],
}

export const everything = (params: IEverythingRequest) => api.get<IEverythingResponse>('everything', { params })

export const topHeadlines = () => api.get('topheadlines');
