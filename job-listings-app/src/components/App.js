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
      <div id="header">
      </div>
      <div>
        {selectedFilters.length ? <Filter /> : null}
      </div>
      <div id="job-list">
        <JobList />
      </div>
    </section>
  );

}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
