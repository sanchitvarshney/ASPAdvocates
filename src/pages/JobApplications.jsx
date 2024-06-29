import React, { useState } from "react";
import styled from "styled-components";
import SolidBtn from "../components/Buttons/SolidBtn";
import { useForm } from "react-hook-form";
import axios from "axios";
import SuccessAlertCard from "../components/Cards/SuccessAlertCard";
import Loader from "../components/Loader";
import { FaAngleDoubleRight } from "react-icons/fa";
const JobApplications = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
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
    data.type = "job"
    console.log(data)
    const formData = new FormData()
    formData.append("userName", data.userName)
    formData.append("userEmail", data.userEmail)
    formData.append("userPqe", data.userPqe)
    formData.append("userDob", data.userDob.split("-").reverse().join("-"))
    formData.append("empGender", data.empGender)
    formData.append("userMobile", data.userMobile)
    formData.append("resume", data.resume[0])
    formData.append("otherDocument", data.otherDocument[0])
    formData.append("type", data.type)
    console.log("formdata",formData)
    try {
      const response = await axios.post(`${import.meta.env.VITE_CONTACT_URL}/internshipFormEspLaw`, formData,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });
      if(response.data.status==="success"){
        setData(response.data);
        setAlert(true)
      }else if(response.data.status==="error"){
        setError(response.data.message.msg);
        
      }
     
      
      reset()
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      {alert && <SuccessAlertCard setAlert={setAlert} message={data?.message}/>}
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            CAREER - JOB APPLICATIONS
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our firm stands at the forefront of legal excellence in India, renowned for our unwavering  commitment to service excellence and client fulfillment.
          </p>
        </div>
      </div>
      <div className="internship_container">
        <div className="container">
          <div className="title">
            <h1>APPLICATION FORM</h1>
            <hr />
          </div>
          <div className="internship_form">
            <form  onSubmit={handleSubmit(onSubmit)}>
              <h3>PERSONAL DETAILS</h3>
              <div className="grid-3">
                <div className="input_group">
                  <label htmlFor="">full name</label>
                  <input type="text" {...register("userName", { required: true, maxLength: 20 })}/>
                </div>
              </div>
              <div className="grid-3">
                <div className="input_group">
                  <label htmlFor="">date of birth</label>
                  <input type="date" {...register("userDob", { required: true, maxLength: 20 })}/>
                </div>
                <div className="input_group">
                  <label htmlFor="">email</label>
                  <input type="text" {...register("userEmail", { required: true})}/>
                </div>
                <div className="input_group">
                <label htmlFor="">Gender</label>
                 <select {...register("empGender", { required: true})}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                 </select>
                </div>
              </div>
              <div className="grid-2">
                <div className="input_group">
                  <label htmlFor="">phone number</label>
                  <input type="number" {...register("userMobile", { required: true })}/>
                </div>
              </div>
              <div className="grid-2">
                <div className="input_group">
                  <label htmlFor="">PQE(Post-Qualified Experience)</label>
                  <input type="text"  {...register("userPqe", { required: true})}/>
                </div>
              </div>
              <div className="grid-2"></div>
              <h3>ATTACHMENTS</h3>
              <div className="grid-3">
                <div className="input_group file">
                  <label htmlFor="">Resume/CV</label>
                  <input type="file" {...register("resume", { required: true})}/>
                </div>
                <div className="input_group file">
                  <label htmlFor="">Important documents (If any)</label>
                  <input type="file" {...register("otherDocument", { required: true })}/>
                </div>
              </div>
              <p className="error">{(error !== "") && error}</p>
              {loading ? (
                    <button disabled>
                      <Loader />
                    </button>
                  ) : (
                    <button>
                      Submit
                    </button>
                  )}
            </form>
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
    background: url("/images/jobcover.png");
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
  .internship_container {
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 100px 0;
    background-color: #efefef;
    .container {
      padding: 50px 100px;
      background-color: #fff;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      h1 {
        font-size: 40px;
        color: #00204c;
      }
      hr {
        height: 0;
        border: 1px solid #00204c;
        width: 100px;
      }
    }
    .internship_form {
      margin-top: 50px;

      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 20px;
      }
      .grid-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      .input_group {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: start;
        margin-bottom: 30px;
        label {
          text-transform: capitalize;
        }
      }
      input,
      select {
        padding: 10px;
        outline: none;
        border: none;
        background-color: #00204c19;
        border-radius: 3px;
      }
      .error{
        color: red;
        font-size: 16px;
      }
      button {
          padding: 10px 30px;
          margin-top: 10px;
          border-radius: 3px;
          font-size: 15px;
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
  @media only screen and (max-width: 933px) {
    .internship_container {
      padding: 50px 0;

      .container {
        padding: 30px 0px;
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
    .internship_container {
      .title {
        h1 {
          font-size: 25px;
          font-weight: 400;
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
  @media only screen and (max-width: 426px) {
    .top {
      .container {
        padding: 0;
        h1{
          font-size: 25px;
          text-align: center;
        }
        p{
          font-size: 15px;
          text-align: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px){
    .internship_container{
      padding: 10px 0;
      .internship_form {
      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 10px;
      }
     .file{
      input{
        width: 270px;
      }
     }
    }
    }
   
  }
`;
export default JobApplications;
