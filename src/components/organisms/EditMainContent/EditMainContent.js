import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Education from 'components/organisms/EditMainContent/Education';
import Experience from 'components/organisms/EditMainContent/Experience';
import Interests from 'components/organisms/EditMainContent/Interests';
import Skills from 'components/organisms/EditMainContent/Skills';
import UserData from 'components/organisms/EditMainContent/UserData';
import Languages from 'components/organisms/EditMainContent/Languages';
import Certificates from 'components/organisms/EditMainContent/Certificates';
import Courses from 'components/organisms/EditMainContent/Courses';
import Conferences from 'components/organisms/EditMainContent/Conferences';
import Publications from 'components/organisms/EditMainContent/Publications';
import Licenses from 'components/organisms/EditMainContent/Licenses';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px;
  height: (100vh - 50px);
  /* border: 1px solid red; */
  margin-top: 70px;
  margin-left: 300px;
  color: black;
  /* border: 1px solid black; */
`;

class EditMainContent extends Component {
  componentDidUpdate() {
    console.log('EditMainPage did update');
  }

  render() {
    const { language } = this.props;
    const { currentView } = this.props.editComponentView;
    return (
      <StyledWrapper>
        {currentView === 'personal' && <UserData language={language} />}
        {currentView === 'education' && <Education language={language} />}
        {currentView === 'experience' && <Experience language={language} />}
        {currentView === 'languages' && <Languages language={language} />}
        {currentView === 'skills' && <Skills language={language} />}
        {currentView === 'interests' && <Interests language={language} />}
        {currentView === 'conferences' && <Conferences language={language} />}
        {currentView === 'courses' && <Courses language={language} />}
        {currentView === 'publications' && <Publications language={language} />}
        {currentView === 'licenses' && <Licenses language={language} />}
        {currentView === 'certificates' && <Certificates language={language} />}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ editComponentView }) => ({ editComponentView });
export default connect(mapStateToProps)(EditMainContent);
