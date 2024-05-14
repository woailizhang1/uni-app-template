export interface GlobConfig {
  // 网页 title
  title: string;
  // 接口 url
  apiUrl: string;
  // 上传 url
  uploadUrl?: string;
  //  接口 url 前缀
  urlPrefix?: string;
  // 项目缩写
  shortName: string;
}

export interface GlobEnvConfig {
  // 网页 title
  VITE_GLOB_APP_TITLE: string;
  // 接口 url
  VITE_GLOB_API_URL: string;
  // 接口 url 前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 上传 url
  VITE_GLOB_UPLOAD_URL?: string;
}
