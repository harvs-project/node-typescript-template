import { IApplication, ILogger } from '../language'

export const NodeApplication = (logger: Readonly<ILogger>) => {
  return {
    main: (argv: ReadonlyArray<string>) => {
      logger.log(argv.join(' '))
      return 0
    }
  } as Readonly<IApplication>
}
