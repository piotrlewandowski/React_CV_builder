import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  .spiner {
    color: rgba(255, 255, 255, 0.6);
    /* color: ${({ theme }) => theme.colors.secondaryBlue}; */
    opacity: 0.8;
    font-size: 10rem;
  }
`;

const Loader = () => (
  <StyledWrapper>
    <FontAwesomeIcon icon={faSyncAlt} spin className="spiner" />
  </StyledWrapper>
);

export default Loader;
