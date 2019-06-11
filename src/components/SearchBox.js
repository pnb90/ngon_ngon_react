import React, { useState }from 'react'
import axios from 'axios'
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
  background: white;
  width: auto;
  height: 31px;
  box-sizing: border-box;
  border-radius: 5px;
`

function SearchBox(props){

  const [searchTerms, setSearchTerms] = useState("")

  const handleSearchTermsChanges = (event) => { 
    event.preventDefault();
    setSearchTerms(event.target.value); 
    }
  
  function handleSubmit() {
    var params = { searchTerms }
    var heldResponse = {}
    axios.get("/api/restaurants/search", {params} )
      .then(response => {
                          heldResponse = response.data.search_data.businesses
                          props.searchRestaurantCallback( heldResponse )
      })

  }


  
  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      handleSubmit()
    }
  }

  return(
    <Container>
      <InputBase 
        value = {searchTerms}
        onChange = {handleSearchTermsChanges}
        type = "text"
        onKeyPress = { handleKeyPress }
      />
      <IconButton 
        variant = "contained"
        size = "small"
        aria-label = "search"
        type = "submit"
        onClick = { handleSubmit }
      >
        <SearchIcon /> 
      </IconButton>
    </Container>
  )
}

export default SearchBox