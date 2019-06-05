import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 10px;
  background: palevioletred;
  background: transparent;
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: 2px solid black 
  position: fixed;
  margin-top: 15px
`

const FooterText = styled.p`
  color: papayawhip;
  color: black;
  
  &:hover{
    color: black
  }
  `
function Footer(){
  return(
    <Wrapper>
      <FooterText>
        Created by Phuoc Bui, 2019
      </FooterText>
    </Wrapper>
  )
}

export default Footer