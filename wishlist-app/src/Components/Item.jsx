import React from 'react'
import styled from 'styled-components'

let Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #ebb44c;
margin: 5px;
box-shadow: 2px 2px #919191;
padding: 20px;
width: 60vw;
font-size: 1.25rem;
white-space: nowrap;

button {
  border: none;
  background: none;
  cursor: pointer;
  color: #c37945;
  font-weight: 900;
  flex: 0.1;
  
}

h4 {
  font-size: smaller;
  font-weight: 650;
  flex: 0.9;
}


p {
color: #c37945;
cursor: default;
font-weight: 500;
}
`

function Item(props) {
  return (
    <Div>
     <h4>{props.inventory}</h4>
      <button onclick={() => props.upVote(props.index)}>
        Up    
      </button>
      <p>|</p>
      <button onclick={() => props.downVote(props.index)}>
        Down
      </button>
    </Div>
  )
}

export default Item
