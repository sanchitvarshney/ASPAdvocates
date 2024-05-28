import React from 'react'
import styled from 'styled-components'

const OutLineBtn = ({children,toggleState,toggleValue,animation,animationDelay,animationDuration}) => {
  return (
    <Button data-aos={animation} data-aos-delay={animationDelay} data-aos-duration={animationDuration}>
      <button onClick={()=>toggleState &&toggleState(toggleValue)}>{children}</button>
    </Button>
  )
}
const Button = styled.div`
width: max-content;
   button{
    padding: 10px 20px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s;
    width: max-content;
    &:hover{
        transition: all 0.2s;
        background-color:#fff;
        color:#00204c;
        cursor: pointer;
    }
   }
`
export default OutLineBtn
