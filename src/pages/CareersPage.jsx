import React from "react";
import styled from "styled-components";
import SolidBtn from "../components/Buttons/SolidBtn";
import { Link } from "react-router-dom";

const CareersPage = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            CAREER
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our firm stands at the forefront of legal excellence in India, renowned for our unwavering commitment to service excellence and client fulfillment.
          </p>
        </div>
      </div>
      <div className="career_section">
        <div className="container">
          <div className="cards">
           <Link to={"/internship"}>
           <div className="card">
              <div className="image">
                <img src="/images/internship.png" alt="internship" />
              </div>
              <div className="ttile">
                <h2>Internship</h2>
              </div>
            </div></Link>
            <Link to={"/job-applications"}>
            <div className="card">
              <div className="image">
                <img src="/images/jobapplication.png" alt="internship" />
              </div>
              <div className="ttile">
                <h2>Job Applications</h2>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    position: relative;
    height: 500px;
    width: 100%;
    background: url("/images/jobapplication.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      height: 500px;
      z-index: 2;
      background-color: #0303507b;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        color: white;
        font-weight: 400;
        font-size: 40px;
        text-transform: uppercase;
        z-index: 3;
      }
      hr {
        height: 0;
        border: 1px solid #fff;
        width: 100px;
        z-index: 3;
        margin: 10px 0;
      }
      p {
        text-align: center;
        color: #fff;
        z-index: 3;
        font-size: 20px;
        margin-top: 20px;
        max-width: 800px;
        min-width: 300px;
      }
    }
  }
.career_section{
  padding: 100px 0;
  background-color: #efefef;
  .container{
    padding: 0 100px;
  }
  .cards{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    a{
      text-decoration: none;
    }
  }
  .card{
    display: flex;
    flex-direction: column;
    gap: 10px;
    img{
      width: 100%;
      height: auto;
    }
    h2{
      color: #00204c;
      text-transform: capitalize;
    }
  }
}
  @media only screen and (max-width: 933px) {
    .internship_container {
      padding: 50px 0;

      .container {
        padding: 30px 0px;
      }
    }
  }
  @media only screen and (max-width: 768px){
 .career_section{
  .container{
    padding: 0;
  }
 }
  }
  @media only screen and (max-width: 707px) {
    .internship_container {
      .title {
        h1 {
          font-size: 40px;
          color: #00204c;
        }
      }
      .internship_form {
        .grid-3,
        .grid-2 {
          grid-template-columns: 1fr;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .career_section{
      padding: 50px 0;
  .container{
    padding: 0;
  }
  .cards{
    grid-template-columns: 1fr;
  }
 }
  }
  @media only screen and (max-width: 426px) {
    .top {
      .container {
        padding: 0;
        h1 {
          font-size: 25px;
          text-align: center;
        }
        p {
          font-size: 15px;
          text-align: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .internship_container {
      padding: 10px 0;
      .internship_form {
        form {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 10px;
        }
        .file {
          input {
            width: 270px;
          }
        }
      }
    }
  }
`;
export default CareersPage;
