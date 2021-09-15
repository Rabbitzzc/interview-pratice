// js symbol 生成唯一的标识，因此可以用来定义常量的值

// 比如：并不关心 DEBUG，INFO，WARN 的值的意义；仅仅是想获得三个唯一的值作为标志而已
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn'),
}
log(log.levels.DEBUG, 'debug message')
log(log.levels.INFO, 'info message')
