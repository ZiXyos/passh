import axios from "axios";

import { type RequestParameters } from "../types/request.option";

export const request = async <T>({
  method,
  url,
  options = {},
}: RequestParameters) => {
  const headers = {
    ...options.headers,
  };

  const data = options.body ?? {};
  const validateStatus =
    options.validateStatus ?? ((status) => status >= 200 && status < 300);

  const response = await axios.request<T>({
    method,
    url: url.href,
    headers,
    data,
    signal: options.signal,
    validateStatus,
  });

  return response.data;
};
