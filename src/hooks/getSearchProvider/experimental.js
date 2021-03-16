import AdvtrSearchProvider from '../../utils/AdvtrSearchProvider'

// Handle the provider based on env/ab testing
const provider = (ab = false) => new AdvtrSearchProvider()

const experimentalSearchProvider = {
  /**
   * @private
   * */
  get _provider () {
    return provider()
  },
  get name () {
    return this._provider.name
  },
  get search () {
    return this._provider.search
  },
  get getDetails () {
    return this._provider.getDetails
  }
}

export default experimentalSearchProvider
