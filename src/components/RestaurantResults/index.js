import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

function RestaurantResults(props){
  var results = null
  if( props.searchResults.dataFromChild ) {
    results = props.searchResults.dataFromChild
  } 
  else if ( props.defaultResults ) {
    results = props.defaultResults
  } 
  else {
    return(
      <div>
        <CircularProgress />
      </div>
    )
  }
    
  const displayResults = results.map(result =>
    <RestaurantContainer>
      <h3>
        { result.name } 
      </h3>
      <h4>
        { result.location.display_address[0] } <br />
        { result.location.display_address[1] }
      </h4>
      <h4>
        { result.display_phone }
      </h4> 
    </RestaurantContainer>
  )
    
  return(
    <Container>
      { displayResults }
    </Container>
  )
} 

export default RestaurantResults