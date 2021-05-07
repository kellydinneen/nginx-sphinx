const log = [
  {
    ipAddress: '10.0.1.6',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
  },
  {
    ipAddress: '10.0.1.4',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/about",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
  },
  {
    ipAddress: '10.0.1.3',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/news",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
  },
  {
    ipAddress: '10.0.1.6',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/about",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
  }
];

const logWithoutTopAgentOrRequest = [
  {
    ipAddress: '10.0.1.6',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.3"
  },
  {
    ipAddress: '10.0.1.4',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/about",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
  },
  {
    ipAddress: '10.0.1.3',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/news",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
  },
  {
    ipAddress: '10.0.1.6',
    requestTimestamp: "10/Nov/2020:22:05:55",
    requestMethod: "GET",
    requestPath: "/contact",
    requestStatus: 200,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
  }
];

module.exports = {
  log
}
