export interface IAxios {
  url: string;
  method?: string;
  body?: {
    [key: string]: any;
  };
  headers?: any;
  cookie?: string;
}
