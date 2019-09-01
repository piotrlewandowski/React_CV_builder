import styled, { css } from 'styled-components';

const PrimaryButton = styled.button`
  min-width: 80px;
  height: 25px;
  background: ${({ theme }) => theme.colors.secondaryGrey};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  color: white;
  padding: 0 10px;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGrey};
    border-color: ${({ theme }) => theme.colors.primaryGrey};
    cursor: pointer;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.secondaryGrey};
    border-color: ${({ theme }) => theme.colors.secondaryGrey};
  }

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.primaryBlue};
      border-color: ${({ theme }) => theme.colors.primaryBlue};

      &:hover {
        background: ${({ theme }) => theme.colors.lightBlue};
        border-color: ${({ theme }) => theme.colors.lightBlue};
      }
    `}

  ${({ dafault }) =>
    dafault &&
    css`
      margin: 0 15px;
      float: right;
      clear: both;
    `}
`;

export default PrimaryButton;