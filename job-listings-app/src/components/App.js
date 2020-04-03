import React from 'react';
import JobList from './JobList';
import './App.css';
import Filter from './Filter.js';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { selectedFilters: state.selectedFilters };
};

function ConnectedApp({selectedFilters}) {

  return (
    <section id="main-wrapper">
      <article id="header">
      </article>
      <article>
        {selectedFilters.length ? <Filter /> : null}
      </article>
      <article id="job-list">
        <JobList />
      </article>
    </section>
  );

}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
