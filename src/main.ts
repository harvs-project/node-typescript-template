import { NodeApplication, ConsoleLogger } from './implementation'

process.exit(NodeApplication(ConsoleLogger()).main(process.argv))
