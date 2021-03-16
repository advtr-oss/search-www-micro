/**
 * Placeholder for now
 *
 * Will work on getting it to be a clone of the original
 * then look to add the contexts for a better future
 * */
import React from 'react';

import Wrapper from "./Wrapper";
import RoutingProvider from "../Routing";

import MapView from "../MapView";
import SearchCard from "../SearchCard";


const SearchPage = () => {
  return (
    <Wrapper>
      <div className='cards'>
        <RoutingProvider />
      </div>
      <MapView />
    </Wrapper>
  )
}

export default SearchPage
