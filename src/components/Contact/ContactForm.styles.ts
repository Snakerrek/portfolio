import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 30px;

  @media screen and (max-width: 1100px) {
    max-width: 600px;
    padding: 4rem 2rem 2rem 2rem;
  }
  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
`;

export const ContactFormForm = styled.form`
  border-radius: 8px;
  background: var(--grey);
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  label {
    font-size: 1.2rem;
    margin-left: 5px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    background-color: var(--darkGrey);
    outline: none;
    border: none;
    border-radius: 8px;
    margin: 5px;
  }
  textarea {
    min-height: 132px;
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  background: transparent;
  color: var(--lightBlue);
  font-size: 1.4rem;
  display: inline-block;
  border: solid 2px var(--lightBlue);
  padding: 0.75rem 2.5rem;
  border-radius: 8px;
  cursor: pointer;
`;
