export type ErrorMessageMode = "none" | "modal" | "message" | undefined;
export type SuccessMessageMode = ErrorMessageMode;

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // Whether to process the request result
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Success message prompt type
  successMessageMode?: SuccessMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  withHospId?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
}

export interface Result<T = any> {
  code: number;
  // type: "success" | "error" | "warning";
  data?: T;
  rows?: T;
  msg: string;
  // message: string;
  // result: T;
}
