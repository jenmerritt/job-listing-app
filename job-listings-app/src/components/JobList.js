import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import Job from "./Job";
import './JobList.css';


export class JobList extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
      if(this.props.selectedFilters.length === 0){
      return (
        <>
        <ul id="job-list">
          {this.props.allJobs.map(job => (
              <Job key={job.id} job={job} />
            ))}
        </ul>
      </>
        );
    }
    return(
      <>
        <ul id="job-list">
          {this.props.filteredJobs.map(job => (
              <Job key={job.id} job={job} />
            ))}
        </ul>
      </>
    )
  }
}

function mapStateToProps(state) {
    return {
      allJobs: state.allJobs,
      selectedFilters: state.selectedFilters,
      filteredJobs: state.filteredJobs
    };
  }

export default connect(
  mapStateToProps,
  { getData }
)(JobList);