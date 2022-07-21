import React, { useContext } from "react";

import SearchProviderContext from "../../contexts/SearchProviderContext";

export default function withSearchProvider (WrappedComponent, displayName) {
  const InternalComponent = (props) => {
    const ctx = useContext(SearchProviderContext)
    return (<WrappedComponent searchProvider={ctx.searchProvider} {...props} />)
  }

  // Set the name if it's passed
  displayName && (WrappedComponent.displayName = displayName)

  InternalComponent.displayName = `withSearchProvider(${WrappedComponent.displayName})` || 'withSearchProvider'

  return InternalComponent
}
