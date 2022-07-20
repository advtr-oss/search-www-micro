/**
 *
 * Global class for SearchProvider, should be
 * extended and updated for any provider we may use
 * be it an API change, or even just removing the API
 * and using another, etc
 *
 * @note This might not be the best way but will work for now
 *
 * */
export class SearchProvider {
  get name () {
    throw new Error('Not implemented')
  }

  /**
   *
   * Handle the searching of the location
   *
   * @param {string} query
   * @param {Object} options
   * */
  async search (query, options) {
    throw new Error('Not implemented')
  }

  /**
   *
   * Get place details for ID
   *
   * @param {string} placeid
   * @param {Object} options
   * */
  async getDetails (placeid, options) {
    throw new Error('Not implemented')
  }
}
