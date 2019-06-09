import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  display: flex;
  background: white;
  width: 400px;
  height: 435px;
  border: 2px black solid;
  box-sizing: border-box;
`

function RestaurantResults(props){

  if( props.searchResults.dataFromChild ) {

  const results = props.searchResults.dataFromChild.map(searchResult =>
    <div>
      { searchResult.name }
    </div>
  )

  return(
    <Container>
      <h1>
        { results }
      </h1>
    </Container>
  )

  } else {
    return(
      <CircularProgress />
    )
  }
}

export default RestaurantResults