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

function handleSubmit(searchTerms) {
  const backend_search = searchTerms
  // console.log("I'm in the handleSubmit Function")
  // console.log(backend_search)
  axios.get("/api/restaurants/search", backend_search)
    .then(response => console.log(response))
}

function SearchBox(){
  const [searchTerms, setSearchTerms] = useState("")

  const handleSearchTermsChanges = (event) => { 
    event.preventDefault();
    setSearchTerms(event.target.value); 
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
        onSubmit = { handleSubmit(searchTerms) }
      >
        <SearchIcon /> 
      </IconButton>
    </Container>
  )
}

export default SearchBox