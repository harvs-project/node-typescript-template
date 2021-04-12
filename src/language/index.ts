import { ILogger } from './interface/logger'
import { IApplication } from './interface/application'

type Constructor<T, TArgs> = (args: Readonly<TArgs>) => Readonly<T>

export { Constructor, IApplication, ILogger }
