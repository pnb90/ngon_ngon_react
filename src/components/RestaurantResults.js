import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  display: flex;
  background: white;
  width: auto;
  height: 435px;
  border: 2px black solid;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 5px;

`

const RestaurantContainer = styled.div`
  border: 1px black solid;
  width: auto;
`

function RestaurantResults(props){

  if( props.searchResults.dataFromChild ) {

  const results = props.searchResults.dataFromChild.map(searchResult =>
    <RestaurantContainer>
      <h3>
        { searchResult.name } 
      </h3>
      <h4>
        { searchResult.display_phone }
      </h4> 
      <h4>
        { searchResult.location.display_address[0] } <br />
        { searchResult.location.display_address[1] }
      </h4>
    </RestaurantContainer>
  )

  return(
    <Container>
      <RestaurantContainer>
        { results }
      </RestaurantContainer>
    </Container>
  ) 
  } else {
    return(
      <Container>
        heyo
      </Container>
    )
  }
} 

export default RestaurantResults