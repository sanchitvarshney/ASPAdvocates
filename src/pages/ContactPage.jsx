import React, { useState } from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import SolidBtn from "../components/Buttons/SolidBtn";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "../components/Loader";
import SuccessAlertCard from "../components/Cards/SuccessAlertCard";
const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [alert,setAlert] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_CONTACT_URL}/contactUsEspLaw`, data);

      setData(response.data);
      setAlert(true)
      reset()
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
console.log(data)
  return (
    <Wrapper>
      {alert && <SuccessAlertCard setAlert={setAlert} message={data?.message}/>}
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            CONTACT US
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our firm stands at the forefront of legal excellence in India, renowned for our unwavering commitment to service excellence and client fulfillment.
          </p>
        </div>
      </div>
      <div className="consultation_section">
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="company_detail" data-aos="fade-right">
                <div className="logo">
                  <a href="#">
                    <h1>
                      ASP <span>Advocates</span>
                    </h1>
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
                      <FiMail size={20} />
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
            </div>
            <div className="contact_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Fullname" data-aos="fade-up" {...register("userName", { required: true, maxLength: 20 })} autoComplete="off"/>
                <input type="email" placeholder="john@domain.com" data-aos="fade-up" {...register("userEmail", { required: true })} autoComplete="off"/>
                <input type="number" placeholder="+91 000 000 0000" data-aos="fade-up" {...register("userPhone", { required: true, maxLength: 20 })} autoComplete="off"/>
                <textarea placeholder="Message" data-aos="fade-up" rows={5} {...register("msg", { required: true })} autoComplete="off"/>
                <div className="btn">
                  {loading ? (
                    <button disabled>
                      <Loader />
                    </button>
                  ) : (
                    <button>
                      Submit
                      <FaAngleDoubleRight />
                    </button>
                  )}
                </div>
              </form>
            </div>
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
    background: url("/images/contact2.png");
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
      gap: 5px;
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

  .consultation_section {
    padding: 100px 0;
    background: #efefef;
    .card {
      display: grid;
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      gap: 100px;
      padding: 50px;
      border: 8px solid #00204c6c;
      z-index: 2;
    }
    .card::after {
      content: "";
      position: absolute;
      margin-left: 10px;
      margin-top: 10px;
      border: 8px solid #00204c37;
      bottom: -25px;
      left: 0;
      right: -25px;
      top: 0;
      z-index: -1;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 20px;
      h1 {
        font-size: 40px;
        color: #00204c;
        text-transform: capitalize;
        font-weight: 500;
        border-bottom: 2px solid #00204c;
        display: inline-block;
        span {
          font-size: 30px;
        }
      }
      p {
        font-size: 18px;
        color: #00204c;
        line-height: 25px;
        font-weight: 500;
        text-align: justify;
      }
      .company_detail {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .logo {
          h1 {
            font-size: 40px;
            span {
              font-family: "Roboto Slab", serif;
            }
          }
        }
      }
      a {
        text-decoration: none;
        color: #00204c;
        &:hover {
          border-bottom: 1px solid #00204c;
        }
      }
      .other_info {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .other_info > div {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #00204c;
        font-size: 18px;
        font-weight: 500;
      }
    }
    .contact_form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
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
        textarea {
          padding: 10px;
          font-size: 18px;
          font-weight: 500;
          border: 2px solid #00204cba;
          border-radius: 3px;
          outline: none;
        }
        button {
          padding: 10px 30px;
          margin-top: 10px;
          border-radius: 3px;
          font-size: 18px;
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
          width: max-content;
          &:hover {
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            background-color: #00204cd0;
          }
          &:disabled {
            cursor: not-allowed;
            background-color: gray;
            padding: 8px 50px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .consultation_section {
      .card {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .consultation_section {
      padding: 50px 0;
      .card {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0;
        border: none;
        position: relative;
        &::after {
          border: none;
          position: static;
        }
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
  .consultation_section {
    .card {
      .content {
        p {
          font-size: 15px;
        }
        h1 {
          font-size: 25px;
        }
      }
      .other_info > div {
        font-size: 15px;
      }
      .contact_form {
        input,
        textarea {
          font-size: 15px;
        }
      }
    }
  }
`;
export default ContactPage;
