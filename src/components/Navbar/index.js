import React from 'react'
import { Link } from 'react-router-dom'
import Restaurants from './Restaurants'
import User from './User'
import '../App.css'
import { Wrapper, Logo, List, StyledLink, LinkText } from './style'

function Navbar() {

  return(
    <Wrapper>
      <List>
        <Logo>
          <StyledLink
          to="/"
          >
          <LinkText>
            Ngon Ngon 
          </LinkText>
          </StyledLink>
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