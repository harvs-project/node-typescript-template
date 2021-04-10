import { Service } from 'typedi'
import Types from '../../di'

import { ILogger, LogLevel } from '../interface'

@Service(Types.ILogger)
export default class ConsoleLogger implements ILogger {
  log(msg: any, level: LogLevel = 'info'): void {
    console[level](msg)
  }
}
