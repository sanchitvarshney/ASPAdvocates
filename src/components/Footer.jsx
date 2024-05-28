import React, { useState } from "react";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <div className="footer-links">
        <div className="container">
          <div className="company_detail">
            <div className="logo">
              <a href="#">
                ASP<span>Advocates</span>
              </a>
            </div>
            {/* <p>ASP Advocates is a full service law firm comprising of lawyers, company secretaries, chartered accountants and industry specific consultants.</p> */}
            <div className="other_info">
              <div className="location">
                <span>
                  <FaLocationArrow size={20} />
                </span>
                A-71, Defence Colony, New Delhi - 110024
              </div>
              <div className="phone">
                <span>
                  <MdOutlinePhoneAndroid size={20} />
                </span>
                Phone:+91-11-40539722 / +91-9811722213 / +91-9999201504
              </div>
              <div className="mail">
                <span>
                  <CiMail size={20} />
                </span>
                Mail:
                <a href="mailto:asp@asplaw.in" target="_blank">
                  info@asplaw.in
                </a>
                /
                <a target="_blank" href="mailto:asp@asplaw.in">
                  asp@asplaw.in
                </a>
              </div>
            </div>
          </div>

          <div className="usefull-link">
            <span className="title">usefull links</span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">contact us</Link>
              </li>
              <li>
                <Link to="/practice">proficiency</Link>
              </li>
            </ul>
          </div>
          <div className="subscribe_social">
            <div className="subscribe_form">
              <h3>SUBSCRIBE OUR NEWSLETTER</h3>
              <form action="">
                <input type="text" placeholder="Email" />
                <button>Subscribe</button>
              </form>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/company/asp-advocates" target="_blank">
                <FaLinkedinIn size={30} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="text-content">
            Copyright © 2013 <strong>ASP Advocates</strong>
          </div>
          <div className="images"></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #022444;
  .footer-links {
    padding: 50px 0;
    border-bottom: 1px solid #003072;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: start;
      flex-wrap: wrap;
      gap: 50px;
    }
    .company_detail {
      max-width: 500px;
      min-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      .logo a {
        font-weight: 400;
        font-size: 35px;
        color: #fff;
        text-decoration: none;
        border-bottom: 2px solid #fff;
        font-family: "Playfair Display", serif;
        span {
          text-transform: uppercase;
          font-size: 25px;
          font-family: "Playfair Display", serif;
        }
      }

      p {
        font-size: 14px;
        color: #fff;
        text-align: justify;
      }
      .other_info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #fff;
        div {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
    .categories,
    .usefull-link,
    .others {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
      .title {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        white-space: nowrap;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 15px;
          transition: all 0.2s;
          text-transform: capitalize;

          &:hover {
            border-bottom: 1px solid #fff;
            transition: all 0.2s;
          }
        }
      }
    }
  }
  .subscribe_social {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .subscribe_form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    form {
      display: flex;
      align-items: center;
      border: 1px solid #fff;
      input {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 10px;
        font-size: 17px;
        color: #fff;
      }
      button {
        background-color: #fff;
        color: #00204c;
        padding: 10px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 17px;
        border: none;
        outline: none;
        cursor: pointer;
        letter-spacing: 0px;
      }
    }
    .social {
      display: flex;
      gap: 10px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
  .consultation {
    padding: 30px 0;
    border-bottom: 1px solid #003072;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .left {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .title {
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        text-transform: capitalize;
      }
      p {
        color: lightgray;
        font-size: 15px;
      }
    }
    .form {
      display: flex;
      align-items: center;
      gap: 7px;
      input {
        padding: 10px 20px;
        font-size: 15px;
        color: var(--text-color);
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: #fff;
      }
    }
  }
  .copyright {
    padding: 30px 0;
    border-bottom: 1px solid #00204c;
    .container {
      .text-content {
        color: lightgray;
        strong {
          color: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .footer-links {
    }
  }
  @media only screen and (max-width: 426px) {
    .footer-links {
      .company_detail {
        .logo a {
          font-size: 25px;
          span {
            font-size: 20px;
          }
        }
        .other_info {
          div {
            font-size: 14px;
          }
        }
      }
    }
    .copyright {
      padding: 10px 0;
      border-bottom: 1px solid #00204c;
      .container {
        .text-content {
          color: lightgray;
          font-size: 13px;
          strong {
            color: #fff;
          }
        }
      }
    }
    .subscribe_social {
      form {
        align-items: start;
        border: none;
        flex-direction: column;
        gap: 10px;
        input {
          border: 1px solid #fff;
        }
        button {
          border-radius: 3px;
        }
      }
    }
  }
 
`;
export default Footer;
