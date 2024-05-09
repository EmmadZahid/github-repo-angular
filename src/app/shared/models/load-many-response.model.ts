/**
 * A single data model provided to table on which table renders the data
 */
export class LoadManyResponseModel<T = Record<string, any>> {
  /**
   *
   * @param items items of type T
   * @param total_count total count
   * @param incomplete_results whether its the last page or not
   */
  public constructor(
    public items: T[],
    public total_count: number,
    public incomplete_results: boolean
  ) {}
}
