import styled, {css} from "styled-components"

export default styled.button`
  /* border-radius: 6px;
  padding: 0.5rem 3rem; */
  font-family: inherit;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: 1.1rem;

  font-weight: 500;
  border-radius: 50px;
  padding: 1rem 3rem;
  background: rgb(248, 97, 80);
  text-decoration: none;
  transition: transform 0.5s ease-in-out 0s;
  cursor: pointer;
  color: white;
  border: none;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${props =>
    props.submitButton &&
    css`
      background: #0069d9;
      margin: 1rem auto;
      padding: 0.5rem 1.4rem;
      transition: all 0.5s ease;

      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    `}

  ${props =>
    props.closeButton &&
    css`
      background: #dc3545;
      margin: 1.3rem 0 0 auto;
      padding: 0.5rem 1rem;
      transition: all 0.5s ease;

      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    `}
`;

