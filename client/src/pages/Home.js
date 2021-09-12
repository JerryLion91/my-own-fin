import React from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';

import FloatingActionButton from '../components/FloatingActionButton';
// import Modal from '../components/Modal';
import Collapsible from '../components/Collapsible';

import M from 'materialize-css';
import GridRow from '../components/layout/GridRow';

import YearSelect from '../components/YearSelect';
import MonthSelect from '../components/MonthSelect';
import ReportLink from '../components/ReportLink';

export default function Home() {
  const handleHomeClick = () => {
    M.toast({ html: 'Home Clicked!' });
  };

  const handleConfigClick = () => {
    M.toast({ html: 'Config Clicked!' });
  };

  return (
    <Container>
      <Header>
        <a className="btn-flat " onClick={handleHomeClick}>
          <i className="material-icons">home</i>
        </a>
        <h3>Finance</h3>
        <a className="btn-flat " onClick={handleConfigClick}>
          <i className="material-icons">settings</i>
        </a>
      </Header>

      <GridRow>
        <YearSelect value={'0'} />
        <MonthSelect />
        <ReportLink />
      </GridRow>
      <Collapsible />
      {/* <Modal /> */}
      <FloatingActionButton />
    </Container>
  );
}
