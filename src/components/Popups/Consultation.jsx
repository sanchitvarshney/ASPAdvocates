import React from "react";
import styled from "styled-components";
import SolidBtn from "../Buttons/SolidBtn";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDoubleRight } from "react-icons/fa";

const Consultation = ({ toggleState, toggleValue }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="consultation_section">
          <div className="container">
            <div className="popup_card">
              <span className="close">
                <RxCross2 onClick={() => toggleState(toggleValue)} />
              </span>
              <div className="content">
                <div className="company_detail">
                  <div className="logo">
                      <h1>
                        ASP<span>Advocates</span>
                      </h1>
                  </div>
                </div>
              </div>
              <div className="contact_form">
                <form action="">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                  <input type="number" placeholder="Your Phone Number" />
                  <input type="text" placeholder="Message" />
                  <SolidBtn>
                    Submit
                    <FaAngleDoubleRight />
                  </SolidBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 999;

  .container {
    border-radius: 3px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .consultation_section {
    height: 500px;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    .popup_card {
      display: grid;
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      gap: 3px;
      width: 1000px;
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .content {
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, #ffffff, #ffffffe1, #ffffffb7, #ffffff21), url("/images/popupbg1.png");
      background-size: cover;
      padding: 20px;
      a{
        text-decoration: none;
      }
      h1 {
        font-weight: 400;
        font-size: 35px;
        color: #00204c;
        text-decoration: none;
        border-bottom: 2px solid #00204c;
        font-family: "Roboto Slab", serif;
        width: max-content;
        span {
          text-transform: uppercase;
          font-size: 25px;
          font-family: "Roboto Slab", serif;
        }
      }
      p {
        font-size: 18px;
        color: #00204c;
        line-height: 25px;
        font-weight: 500;
        margin-top: 20px;
      }
    }
    .contact_form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px 50px;
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
        input {
          padding: 10px;
          font-size: 18px;
          font-weight: 500;
          outline: none;
          border: 2px solid #00204cba;
          border-radius: 3px;
        }
        button {
          padding: 10px 30px;
          margin-top: 10px;
          border-radius: 3px;
          font-size: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 885px){
    .consultation_section {
    height: 500px;
    width: 1000px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .popup_card {
      display: grid;
      position: relative;
      grid-template-columns: 1fr;
      gap: 3px;
      width: 1000px;
      min-width: 300px;
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .content {
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, #ffffff, #ffffffe1, #ffffffb7, #ffffff21), url("/images/popupbg1.png");
      background-size: cover;
      padding: 20px;
      display: none;
      a{
        text-decoration: none;
      }
      h1 {
        font-weight: 400;
        font-size: 35px;
        color: #00204c;
        text-decoration: none;
        border-bottom: 2px solid #00204c;
        font-family: "Roboto Slab", serif;
        width: max-content;
        span {
          text-transform: uppercase;
          font-size: 25px;
          font-family: "Roboto Slab", serif;
        }
      }
      p {
        font-size: 18px;
        color: #00204c;
        line-height: 25px;
        font-weight: 500;
        margin-top: 20px;
      }
    }
    .contact_form {
      display: flex;
      justify-content: start;
      align-items: start;
      width: 100%;
     padding: 10px;
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
        input {
          padding: 10px;
          font-size: 18px;
          font-weight: 500;
          outline: none;
          border: 2px solid #00204cba;
          border-radius: 3px;
        }
        button {
          padding: 10px 30px;
          margin-top: 10px;
          border-radius: 3px;
          font-size: 18px;
        }
      }
    }
  }
  }
`;
export default Consultation;
