/**
 * Represents a node.js application
 */
export type IApplication = Readonly<{
  /**
   * @method run Process entry point
   * @param argv Command line arguments
   * @return Process exit status code
   */
  main(argv: ReadonlyArray<string>): number
}>
