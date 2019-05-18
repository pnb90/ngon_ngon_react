import React from 'react'
import { Link } from 'react-router-dom'
import Restaurants from './Restaurants'
import User from './User'
import '../App.css'
import styled from 'styled-components'

  const Wrapper = styled.nav`
    padding: 20px;
    background: papayawhip;
    width: 100%;
    position: sticky;
  `

  const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  `
  const StyledLink = styled(Link)`
    text-decoration: none;
  `
  const LinkText = styled.li`
    display: inline;
    padding: 5px;
    color: palevioletred;

    &:hover{
      text-decoration: underline
    }
  `
function Navbar() {

  return(
    <Wrapper>
      <List>
        <StyledLink 
          to="/restaurants" 
          component={ Restaurants }>
          <LinkText>Restaurants</LinkText>
        </StyledLink>
        <StyledLink
          to="/users" 
          component={ User }>
          <LinkText>Users</LinkText>
        </StyledLink>
      </List>
    </Wrapper>
  );
}

export default Navbar