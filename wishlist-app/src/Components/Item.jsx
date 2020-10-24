import React from 'react'
import styled from 'styled-components'

let Div = styled.div`
display: flex;
align-items: center;
background-color: #ebb44c;
margin: 5px;
box-shadow: 2px 2px #919191;
padding: 20px;
width: 60vw;
font-size: 1.25rem;

@media (min-width: 500px) {
width: 40vw;
}
  

button {
  border: none;
  background: none;
  cursor: pointer;
  color: #c37945;
  font-weight: 900;
  flex: 0.1;
}

button:hover {
font-size: medium;
margin-left: 5px;
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
     <h4>{props.list}</h4>
      <button onClick={() => props.upVote(props.index)}>
        Up    
      </button>
     <p>|</p> 
      <button onClick={() => props.downVote(props.index)}>  
          Down
      </button>
       
    </Div>
  )
}
// oh my god, shay, I literally delayed the homework submission by a day because I had "onclick" for both buttons instead of "onClick"
export default Item
