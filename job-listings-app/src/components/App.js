import React from 'react';
import JobList from './JobList';
import Filter from './Filter';
import './App.css';

function App() {

  return (
    <section id="main-wrapper">
      <article id="header">
      </article>
      <article id="filter">
        <Filter />
      </article>
      <article id="job-list">
        <JobList />
      </article>
    </section>
  );

}

export default App;
