import React, { useContext } from "react";
import SearchProviderContext from "../../contexts/SearchProviderContext";

const useSearchProvider = () => {
  return useContext(SearchProviderContext)
}

export default useSearchProvider
