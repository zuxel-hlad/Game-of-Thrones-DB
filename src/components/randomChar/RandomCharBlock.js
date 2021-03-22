import styled from "styled-components";

export const RandomCharBlock = styled.div`
position: relative;
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    i{
      display: block;
    }
  }
  h4 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
  }
  ul li {
    display: flex;
    justify-content: space-between;
  }
  .term {
    display: block;
    font-weight: bold;
    margin: 0 10px 0 0;
  }
`;
