import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const ProfileCard = () => {
  return (
    <Card>
      <div className="card_top">

      </div>
      <div className="image">
        <img src="/images/abhishek-seth.png" alt="" />
      </div>
      <div className="content">
        <h3>Abhishek Seth</h3>
        <p className="bio">Partner at ASP Advocates</p>

        <p className="experties">Corporate Restructuring | Mergers & Acquisitions (M&A) | Dispute Resolution...</p>
        <div className="loaction">
          <MdLocationOn />
          delhi
        </div>
        <div className="social">
          <a href="">
            <FaLinkedinIn />{" "}
          </a>
          <a href="">
            <MdOutlineEmail />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
position: relative;
border: 1px solid #00204c;
overflow: hidden;
gap: 20px;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
transition: all 0.5s;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.5s;
    transform: scale(1.03);
  }
  .card_top{
    width: 100%;
    height: 100px;
    background-color: #00204c;
}
  .image {
  
    
    display: flex;
    justify-content: center;
    align-items: end;

    img {   
  height: 150px;
   width: 150px;
   border-radius: 50%;
   border: 1px solid #00204c;
   padding: 7px;
   position: relative;
   margin-top: -80px;
   background-color: #d6ecf5;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px 70px ;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    .bio{
        font-size: 15px;
        color: #00204c;
  }
    .experties{
        font-size: 15px;
        color: #00204c;
    }
    .loaction{
        display: flex;
        align-items: center;
        gap: 5px;   
        text-transform: capitalize;
    }
    .social{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        background-color: #00204c;
        a{
            color: #fff;
            font-size: 20px;
        }   
    }
}
`;
export default ProfileCard;
