import React from "react";
import styled from "styled-components";
import { BsChevronDoubleUp } from "react-icons/bs";
const BackToTop = () => {
  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Wrapper>
      <div className="button" onClick={ScrollToTop}>
        <button>
          <BsChevronDoubleUp size={20} onClick={ScrollToTop} />
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #00204c;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 99;
  cursor: pointer;
  border: 1px solid #fff;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: var(--btn-hover-bg);
    }
  }
`;
export default BackToTop;