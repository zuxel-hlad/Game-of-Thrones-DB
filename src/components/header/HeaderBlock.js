import styled from "styled-components";
export const HeaderBlock = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  `,
  HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
  `,
  HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
      margin-right: 20px;
      font-size: 18px;
      &:hover {
        color: #cccc;
      }
    }
  `;
