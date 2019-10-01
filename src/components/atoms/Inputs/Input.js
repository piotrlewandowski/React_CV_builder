import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 45px;
  border-radius: 7px;
  padding: 10px 15px;
  margin: 5px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-top: 2px solid ${({ theme }) => theme.colors.mediumGrey};
`;
const StyledLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-left: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = ({ type, id, placeholder, value, onChange, onBlur }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledWrapper>
  );
};
Input.propType = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Input;
