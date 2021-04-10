export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export interface ILogger {
  log(msg: any, level: LogLevel): void
  log(msg: any): void
}
