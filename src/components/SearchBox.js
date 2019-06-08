import React, { useState }from 'react'
import axios from 'axios'
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
  background: white;
  width: 300px;
  height: 31px;
  box-sizing: border-box;
`

// function handleSubmit(searchTerms) {
//   console.log("HANDLESUBMIT IS TRIGGERING")
//   const params = {searchTerms}
// }

function SearchBox(){

  const [searchTerms, setSearchTerms] = useState("")

  const handleSearchTermsChanges = (event) => { 
    event.preventDefault();
    setSearchTerms(event.target.value); 
    }

  const handleSubmit = (event) => {
    const params = {searchTerms}
    axios.get("/api/restaurants/search", {params} )
      .then(response => console.log(response.data))
  }

  return(
    <Container>
      <InputBase 
        value = {searchTerms}
        onChange = {handleSearchTermsChanges}
        type = "text"
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