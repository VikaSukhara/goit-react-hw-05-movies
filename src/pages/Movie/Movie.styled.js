import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 70px;
  margin-top: 40px;
`;

export const Input = styled.input`
  position: relative;
  border: 2px solid #62b9ef;
  height: 30px;
  background: #d6efff;
  width: 180px;
  border-radius: 50px;
  padding-left: 31px;
  padding-right: 11px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 13px;
  color: black;
  position: absolute;

  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
  &:focus {
    border-color: #324dff;
  }
  &:hover {
    border-color: #324dff;
  }

  /* ::placeholder  {
    color: red;
    font-size: 1.2em;
    font-style: italic;
  } */
`;

export const Button = styled.button`
  position: relative;
  margin-top: 10px;
  margin-left: 185px;
  background-color: transparent;
  border: none;
  color: #324dff;

  &:hover {
    color: #324dff;
  }
`;
