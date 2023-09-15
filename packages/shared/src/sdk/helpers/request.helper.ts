import axios from 'axios'

import { RequestOptions } from "../types/request.option"
import { Methods } from "../types/method.type"

type RequestParameters = {
  method: Methods
  url: URL
  options: Partial<RequestOptions>
}

export const request = async<T>({
  method,
  url,
  options = {},
}: RequestParameters) => {
  const headers = {
    ...options.headers,
  }

  const data = options.body ?? {}
  const validateStatus =
    options.validateStatus ?? ((status) => status >= 200 && status < 300)

  const response = await axios.request<T>({
    method,
    url: url.href,
    headers,
    data,
    signal: options.signal,
    validateStatus
  })

  return response
}

export const GET = <T>({url, options, method = "GET"}: RequestParameters) =>
  request<T>({method, url, options});

export const POST = <T>({url, options, method = "POST"}: RequestParameters) =>
  request<T>({method, url, options})

export const PUT = <T>({ url, options, method = "PUT" }: RequestParameters) =>
  request<T>({ method, url, options })
