import styled from "styled-components";

export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .error__img {
    margin: 0 20px 0 0;
    width: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
  span {
    display: block;
    font-weight: 700;
  }
`;
