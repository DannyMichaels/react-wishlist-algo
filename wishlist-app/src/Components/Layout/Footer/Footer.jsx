import React from 'react'
import styled from 'styled-components'

let StyledFooter = styled.footer`
 position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f9f854;
  text-align: center;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  height: 8vh;
  box-shadow: 2px 5px 5px 5px grey;
`

function Footer() {
  return (
    <StyledFooter>
<h1>WishList App</h1>
    </StyledFooter>
  )
}

export default Footer
