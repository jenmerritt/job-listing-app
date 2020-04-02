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
    return (
      <>
      <ul id="job-list">
        {this.props.jobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
      </ul>
    </>
      );
  }
}

function mapStateToProps(state) {
    return {
      jobs: state.jobs
    };
  }

export default connect(
  mapStateToProps,
  { getData }
)(JobList);



// function JobList({jobs}) {

//   useEffect(() =>{
//     getData();
//   })

//     return(
//       <>
//       <ul>
//         {jobs.map(job => (
//             <li key={job.id}>{job.company}</li>
//           ))}
//       </ul>
//     </>
//     )
// }

// function mapStateToProps(state) {
//   return {
//     jobs: state.jobs
//   };
// }

// export default connect(
// mapStateToProps,
// { getData }
// )(JobList);