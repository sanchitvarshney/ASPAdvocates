import React from 'react'
import styled from 'styled-components'

const SolidBtn = ({children,toggleState,toggleValue}) => {
  return (
    <Button>
        <button onClick={()=>toggleState && toggleState(toggleValue)}>{children}</button>
    </Button>
  )
}
const Button = styled.div`
width: max-content;
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 10px 20px;
      background-color: #00204c;
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
    
      transition: all 0.2s;
      width: max-content;
      &:hover{
        transition: all 0.2s;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
       background-color: #00204cd0;
      }
    }
`
export default SolidBtn
