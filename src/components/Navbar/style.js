import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.nav`
  padding: 20px;
  background: papayawhip;
  background: transparent;
  width: 100%;
  position: sticky;
  border-bottom: 2px solid black; 
  margin-bottom: 15px
`
export const Logo = styled.span`
  font-weight: bold;
  font-size: 25px;
`
export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const LinkText = styled.li`
  display: inline;
  padding: 5px;
  color: palevioletred;
  color: black;
  font-weight: bold;

  &:hover{
    text-decoration: underline
  }
`