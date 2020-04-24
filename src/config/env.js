import ENV from "./environment";

// 请求头，不需要修改
const REQUEST_BASE_URL = {
    pre: "pre_prod", // 预生产
    prod: "prod", // 生产环境
    local: "local" // 局域网下local server
  },

  // 未登陆跳转用的URL, 不需要修改
  LOGIN_URLS = {
    pre:
      "https://mpassportpre.cnsuning.com/ids/login?service=https%3A%2F%2Fsdaspre.cnsuning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fidaspre.cnsuning.com%252FindexNew.htm&loginTheme=idas",
    xgpre:
      "https://mpassportxgpre.cnsuning.com/ids/login?service=https%3A%2F%2Fsdasxgpre.cnsuning.com%2Fauth%3FtargetUrl%3Dhttp%253A%252F%252Fsdasxgpre.cnsuning.com%252FindexNew.htm&loginTheme=sdas",
    sit:
      "https://mpassportsit.cnsuning.com/ids/login?service=http%3A%2F%2Fsdassit.cnsuning.com%2Fauth%3FtargetUrl%3Dhttp%253A%252F%252Fsdassit.cnsuning.com%252FindexNew.htm&loginTheme=sdas",
    prod:
      "https://mpassport.suning.com/ids/login?service=https%3A%2F%2Fedao.suning.com%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fedao.suning.com%252FindexNew.htm&loginTheme=sdas"
  };

export const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export const httpUrl = () => {
  return REQUEST_BASE_URL[ENV];
};

export const loginUrl = () => {
  return LOGIN_URLS["prod"];
};

// 默认本地，统一开启DEBUG, ajax 默认 jsonp
// 生产默认，关闭DEBUG， ajax 直接请求。
export const DEBUG = isLocalhost ? true : '__DEBUG__';