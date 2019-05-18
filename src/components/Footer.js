import React from 'react'
import styled from 'styled-components'

  const Wrapper = styled.footer`
    padding: 10px;
    background: palevioletred;
    width: 100%;
    position: sticky;
    left: 0;
    bottom: 0;
  `
  
  const LinkText = styled.p`
    color: papayawhip;

    &:hover{
      color: black
    }
  `
function Footer(){
  return(
    <Wrapper>
      <LinkText>
        Created by Phuoc Bui, 2019
      </LinkText>
    </Wrapper>
  )
}

export default Footer