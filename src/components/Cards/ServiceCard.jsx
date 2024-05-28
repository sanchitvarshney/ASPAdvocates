import React from "react";
import styled from "styled-components";
import { AiOutlineAudit } from "react-icons/ai";
import { Link } from "react-router-dom";
import SimpleBtn from "../Buttons/SimpleBtn";

const ServiceCard = ({ img, title, desc, animation, animationDelay, animationDuration }) => {
  const str = "Secretarial Audit of Companies including listed and public unlisted companies; Corporate maintenance for compliance with provisions of Companies Act, 1956; Authentication & Certification of Documents.";
  return (
    <Card data-aos={animation} data-aos-delay={animationDelay} data-aos-duration={animationDuration}>
      <div className="image">
        <img src={img || "/images/audit.png"} alt="" />
      </div>
      <div className="content">
        <div className="content-inner">
          <h3>{title || "Audit & secreterial"}</h3>
          <div className="btn">
            <button>read more...</button>
          </div>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;

  img {
    width: 100%;
    transition: all 0.5s;
  }

  .btn {
    margin: 20px 0;
    position: absolute;
    bottom: 10px;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }
  .content-inner {
    position: relative;
    margin-top: -60px;
    background-color: #ffffffd4;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 5;
    height: 150px;
    border-bottom: 3px solid #4169e1;
    width: 100%;
    h3 {
      color: #00204c;
      font-size: 20px;
      text-transform: uppercase;
      transition: all 0.3s;
    }
    p {
      color: var(--text-color);
      margin-top: 20px;
      transition: all 0.3s;
    }
    button {
      border: none;
      cursor: pointer;
      font-size: 13px;
      text-transform: uppercase;
      width: max-content;
      border-bottom: 2px solid #00204c;
      font-weight: 600;
      color: #00204c;
      outline: none;
      background-color: transparent;
      transition: all 0.2s;
    }
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #4169e1;
      transition: all 0.3s;
      z-index: -1;
    }
  }
  .content-inner:hover {
    h3 {
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: all 0.3s;
    }
    p {
      color: #fff;
      margin-top: 20px;
      transition: all 0.3s;
    }
    button {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
    z-index: 5;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #4169e1;
      transition: all 0.3s;
      z-index: -1;
    }
  }
`;
export default ServiceCard;
