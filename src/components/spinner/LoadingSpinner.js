import styled from "styled-components";

export const SpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes ldio-m7hc95qaor {
    0% {
      opacity: 1;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1.5, 1.5);
    }
    100% {
      opacity: 0;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1, 1);
    }
  }
  .ldio-m7hc95qaor div > div {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #85a2b6;
    animation: ldio-m7hc95qaor 1s linear infinite;
  }
  .ldio-m7hc95qaor div:nth-child(1) > div {
    left: 148px;
    top: 88px;
    animation-delay: -0.875s;
  }
  .ldio-m7hc95qaor > div:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 160px 100px;
  }
  .ldio-m7hc95qaor div:nth-child(2) > div {
    left: 130px;
    top: 130px;
    animation-delay: -0.75s;
  }
  .ldio-m7hc95qaor > div:nth-child(2) {
    transform: rotate(45deg);
    transform-origin: 142px 142px;
  }
  .ldio-m7hc95qaor div:nth-child(3) > div {
    left: 88px;
    top: 148px;
    animation-delay: -0.625s;
  }
  .ldio-m7hc95qaor > div:nth-child(3) {
    transform: rotate(90deg);
    transform-origin: 100px 160px;
  }
  .ldio-m7hc95qaor div:nth-child(4) > div {
    left: 46px;
    top: 130px;
    animation-delay: -0.5s;
  }
  .ldio-m7hc95qaor > div:nth-child(4) {
    transform: rotate(135deg);
    transform-origin: 58px 142px;
  }
  .ldio-m7hc95qaor div:nth-child(5) > div {
    left: 28px;
    top: 88px;
    animation-delay: -0.375s;
  }
  .ldio-m7hc95qaor > div:nth-child(5) {
    transform: rotate(180deg);
    transform-origin: 40px 100px;
  }
  .ldio-m7hc95qaor div:nth-child(6) > div {
    left: 46px;
    top: 46px;
    animation-delay: -0.25s;
  }
  .ldio-m7hc95qaor > div:nth-child(6) {
    transform: rotate(225deg);
    transform-origin: 58px 58px;
  }
  .ldio-m7hc95qaor div:nth-child(7) > div {
    left: 88px;
    top: 28px;
    animation-delay: -0.125s;
  }
  .ldio-m7hc95qaor > div:nth-child(7) {
    transform: rotate(270deg);
    transform-origin: 100px 40px;
  }
  .ldio-m7hc95qaor div:nth-child(8) > div {
    left: 130px;
    top: 46px;
    animation-delay: 0s;
  }
  .ldio-m7hc95qaor > div:nth-child(8) {
    transform: rotate(315deg);
    transform-origin: 142px 58px;
  }
  .loadingio-spinner-spin-4fm65a7tkug {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: rgba(NaN, NaN, NaN, 0);
  }
  .ldio-m7hc95qaor {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-m7hc95qaor div {
    box-sizing: content-box;
  }
`;
