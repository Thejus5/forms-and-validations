import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 75%;
  height: fit-content;
  margin: 0 auto;
  box-shadow: 0px 0px 13px -3px rgba(112, 112, 112, 0.62);
  border-radius: 8px;

  margin-top: 50px;
  padding: 20px 30px;

  .form-sub-section {
    position: relative;
    label {
      font-size: 0.8rem;
    }
    span {
      position: absolute;
      bottom: -15px;
      left: 0;
      font-size: 0.7rem;
      color: #d93333;
    }
  }

  .addressSection {
    display: flex;
    justify-content: space-between;
    width: 98%;
    .inputWidth {
      width: 30% !important;
      span{
        bottom: 5px;
      }
    }
  }
`;
