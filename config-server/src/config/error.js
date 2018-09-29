module.exports = {
  ERROR_PARAMS_INVALID: {
    code: 2000,
    desc: '客户端入参错误'
  },
  ERROR_USERNAME_OR_PASS_INVALID: {
    code: 2100,
    desc: '用户名或密码错误'
  },
  ERROR_NOT_LOGIN: {
    code: 2101,
    desc: '用户未登录'
  },
  SENECA_502: {
    code: 30502,
    desc: 'seneca-transport发起一个http请求，访问一对没有服务的主机和端口号元组，导致错误'
  },
  SENECA_500: {
    code: 30500,
    desc: 'seneca-transport发起一个http请求，访问一个存在的微服务，然而没有任何一个模式匹配，内部由于act_not_found而异常并抛出500错误给请求方'
  },
  SENECA_504: {
    code: 30504,
    desc: 'seneca-transport发起一个http请求，访问一个存在的微服务，然而没有任何一个模式匹配，内部由于act_not_found而异常并抛出500错误给请求方'
  },
  SENECA_404: {
    code: 30404,
    desc: 'seneca微服务执行act时，其模式与seneca.list()模式列表中任意一个pattern匹配度都为0，则内部由于act_not_found而异常'
  }
}
