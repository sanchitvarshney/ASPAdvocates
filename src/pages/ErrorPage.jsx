import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SolidBtn from '../components/Buttons/SolidBtn'

const ErrorPage = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="logo">404</div>
            <div className="title">
            We Could Not Find The Page You’re Looking For
            </div>
            <div className="subtitle">
            The link you’re trying to access is probably broken, or the page has been removed.
            </div>
            <NavLink to={"/"}><SolidBtn>Back to home</SolidBtn></NavLink>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    background-color: #fff;
    height: 100vh;
    .container{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        color: #00204c;
    }
    a{
        text-decoration: none;
    }
    .logo{
        font-size: 20vw;
        font-weight: bold;
    }
    .title{
        font-size: 2.5vw;
        font-weight: 600;
        

    }
   
`
export default ErrorPage