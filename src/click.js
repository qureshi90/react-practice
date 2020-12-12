import React from 'react';

function Click() {
  const curse = (e) => {
    e.preventDefault();
    alert('something clicked!')
  }
  
  return(
    <p onClick = {curse}>Click this</p>
  )
}
export default Click;