/**
 * Dependency injection configuration
 * The service module re-exports every service implementation. This
 * is required because otherwise the implementations are never executed.
 */
import 'reflect-metadata'
import Types from './di'
import './service'

import { Container } from 'typedi'

Container.get(Types.IApplication).run(process.argv)
