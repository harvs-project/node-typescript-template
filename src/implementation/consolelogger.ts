import { ILogger } from '../language'

export const ConsoleLogger = () => {
  let count = 0
  return {
    log: (msg: Readonly<string>) => {
      count = count + 1
      console.log(`${count}: ${msg})`)
    }
  } as Readonly<ILogger>
}
