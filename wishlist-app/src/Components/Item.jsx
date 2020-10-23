import React from 'react'
import styled from 'styled-components'

let Div = styled.div`
display: flex;
justify-content: center;
align-items: space-between;
background-color: #ebb44c;
margin: 20px;
box-shadow: 2px 2px #919191;
padding: 20px;
width: 60vw;

button {
  border: none;
  background: none;
  cursor: pointer;
  color: #c37945;
  font-weight: 900;
  flex: 0.1;
}

h4 {
  margin-left: 10px;
  font-weight: 700;
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
