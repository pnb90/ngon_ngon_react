import React from 'react'
import styled from 'styled-components'

  const Wrapper = styled.footer`
    padding: 10px;
    background: palevioletred;
    width: 100%;
    left: 0;
    bottom: 0;
  `
  
  const FooterText = styled.p`
    color: papayawhip;

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