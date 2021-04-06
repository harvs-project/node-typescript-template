/**
 * Represents a node.js application
 */
export default interface IApplication {
  /**
   * @method run Process entry point
   * @param argv Command line arguments
   * @return Process exit status code
   */
  run(argv: ReadonlyArray<string>): number
}
