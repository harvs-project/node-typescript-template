/**
 * Dependency injection configuration
 */

import { Token } from 'typedi'

import { IApplication } from './service/interface'

/**
 * Injectable values mapped to `Token`s
 */
const Types = {
  IApplication: new Token<IApplication>('IApplication')
}

/**
 * Export type to symbol mapping
 */
export default Types
