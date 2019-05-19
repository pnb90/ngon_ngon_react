import React from 'react'
import { Link } from 'react-router-dom'
import Restaurants from './Restaurants'
import User from './User'
import '../App.css'
import styled from 'styled-components'

  const Wrapper = styled.nav`
    padding: 20px;
    background: papayawhip;
    background: transparent;

    width: 100%;
    position: sticky;
    border-bottom: 2px solid black 
  `
  const Logo = styled.span`
    font-weight: bold;
    font-size: 25px;


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
    color: black;
    font-weight: bold;

    &:hover{
      text-decoration: underline
    }
  `
function Navbar() {

  return(
    <Wrapper>
      <List>
        <Logo>
          Ngon Ngon 
        </Logo>
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