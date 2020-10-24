import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
background-color: #f9f854;
height: 9vh;
box-shadow: 2px 2px 4px 1px grey;
align-items: center;
white-space: nowrap;

.Header__left {
  font-weight: 900;
  flex: 0.9;
  margin-left: 20px;
}
.Header__right {
  flex: 0.1;
  font-weight: 720;
 margin-right: 20px;
}
`

function Header() {
  return (
    <StyledHeader >
      <h1 className='Header__left'>Wishlist App</h1>
      <h2 className="Header__right">Lists</h2>
      <h2 className="Header__right">Sign Up</h2>
    </StyledHeader >
  )
}

export default Header
