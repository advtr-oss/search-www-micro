import { createContext } from "react";

import MockSearchProvider from "../../utils/providers/mock";

// Set a default value for tests, storybook, etc.
//
// Could have set this in redux, but it never changes from
// its initial change, unless w/ A/B testing, and then
// I may look at moving it to initial store state
const SearchProviderContext = createContext({
  searchProvider: MockSearchProvider.default()
})

export default SearchProviderContext
