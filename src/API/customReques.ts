import axios, { AxiosRequestConfig } from 'axios';
import ResponseError from './errrorResponse/ResponseError';
import ConnectionError from './errrorResponse/CustomError';

export interface Transformer<In, Out> {
  (data: In): Out;
}

export default async function customRequest<T, R = T>(
  path: string,
  options?: AxiosRequestConfig,
  transform?: Transformer<T, R>
): Promise<R> {
  try {
    const res = await axios(path, options);

    if (transform) {
      return transform(await res.data);
    }

    return res.data;
  } catch (err) {
    console.log(err, err?.message, err?.response?.data, "this is from axios");
    if (!axios.isAxiosError(err)) throw err;

    if (err.response) {
      throw new ResponseError(err?.response?.data?.message, err.response.status);
    }

    throw new ConnectionError();
  }
}
