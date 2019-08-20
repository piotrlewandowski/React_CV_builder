import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: 1px solid black;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  resize: none;
`;

export const Input = styled.input`
  width: 100px;
`;
