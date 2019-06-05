import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components'


const Container = styled.div`
  background: white;
  width: 400px;
  height: 31px;
  box-sizing: border-box;
`

function SearchBox(){
  return(
    <Container>
      <SearchIcon />
      <InputBase 
        placeholder = "Search..."
      />
    </Container>
  )
}

export default SearchBox