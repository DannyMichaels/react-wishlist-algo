import React from 'react'
import styled from 'styled-components'

let StyledBorder = styled.div`
background: blue;


.left {

}

.top {
top: 0;
}
.top, .bottom {
position: fixed;
    left: 0;
    right: 0;
    height: 15px;
}
.top, .bottom, .left, .right {
position: fixed;
    left: 0;
    right: 0;
    height: 15px;
    color: blue;
    border: 5px solid black;
}
`

function Border() {
  return (
    <>
    <StyledBorder className="left"></StyledBorder>
          <StyledBorder className="right"></StyledBorder>
          <StyledBorder className="top"></StyledBorder>
          <StyledBorder className="bottom"></StyledBorder>

    </>
  )
}

export default Border
