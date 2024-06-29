import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
     <div className="loader"></div>
    </Wrapper>
  )
}
const Wrapper = styled.div` 
    .loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #00204cd0;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
export default Loader
