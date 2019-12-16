import React from 'react';
// import Logo from 'components/atoms/Logo/Logo';
import LoggedIn from 'components/atoms/LoggedIn/LoggedIn';
import NavButtons from 'components/molecules/TopNavButtons/navButtons';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import store from 'store';
import { changeLanguage } from 'actions';
import path from '../../../path';
// import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  .lang{
    color:white;
    margin:0 10px;
    font-size:1.2rem;
  }
  p.logo {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.font.bold};
    text-align: center;
    flex-basis: ${({ editor }) => (editor ? '260px' : '150px')};
    flex-shrink: 0;
    span {
      color: ${({ theme }) => theme.colors.primaryBlue};
    }
    @media ${({ theme }) => theme.media.small} {
      display: none;
    }
  }
  ${({ editor }) =>
    editor &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    `}
    @media ${({ theme }) => theme.media.small} {
      padding:0 5px;
    }
`;

const NavBar = ({ location, language }) => {
  const editor = location.pathname === `${path.login}edit` || false;
  return (
    <StyledWrapper editor={editor}>
      <p className="logo">
        <span>CV</span>-builder
      </p>
      <NavButtons editor={editor} />
      <div className="lang">{language}</div>
      <button
        type="button"
        onClick={() => {
          store.dispatch(changeLanguage(language === 'PL' ? 'ENG' : 'PL'));
        }}
      >
        zmień język
      </button>
      <LoggedIn language={language} />
    </StyledWrapper>
  );
};

/* tablet */
// @media ${ ({ theme }) => theme.media.tablet } {
//   width: 150px;
// }

// NavBar.propTypes = {
//   logo: PropTypes.bool,
// };

NavBar.defaultProps = {
  logo: false,
};

export default withRouter(NavBar);
