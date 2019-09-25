import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OptionPanel from 'components/atoms/Buttons/OptionPanel';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

const StripBody = props => {
  const { title, date, id } = props;
  return (
    <StyleWrapper>
      <div>{title}</div>
      <div>{`${date}`}</div>
      <div>
        <OptionPanel id={id} />
      </div>
    </StyleWrapper>
  );
};

StripBody.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  id: PropTypes.string,
};
StripBody.defaultProps = {
  title: 'pusty',
  date: 'pusty',
  id: '',
};

export default StripBody;
