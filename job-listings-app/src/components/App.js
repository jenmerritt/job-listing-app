import React from 'react';
import JobList from './JobList';
import './App.css';
import Filter from './Filter.js';

function App() {

  return (
    <section id="main-wrapper">
      <article id="header">
      </article>
      <article>
        <Filter />
      </article>
      <article id="job-list">
        <JobList />
      </article>
    </section>
  );

}

export default App;
