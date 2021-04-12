import { IApplication, ILogger } from '../language'

export const NodeApplication = (
  logger: Readonly<ILogger>
): Readonly<IApplication> => {
  return {
    main: (argv: ReadonlyArray<string>) => {
      logger.log(argv.join(' '))
      return 0
    }
  }
}
