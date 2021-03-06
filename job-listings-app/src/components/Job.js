import React from 'react';
import './Job.css';
import {addFilter} from '../actions/actions';
import store from "../store/store";

function Job({job}){

    return(
        <li className={job.featured ? "featured-job individual-job" : "individual-job"}>
            <div className="job-column-1">
                <img alt="logo" src={job.logo} />
            </div>
            <div className="job-column-2">
                <div className="job-col2-row1">
                    <div className="job-c2-r1-item">{job.company}</div>
                    {job.new ? <div className="job-c2-r1-item new-badge">NEW!</div> : null}
                    {job.featured ? <div className="job-c2-r1-item featured-badge">FEATURED</div> : null}
                </div>
                <div className="job-col2-row2">
                    {job.position}
                </div>
                <div className="job-col2-row3">
                    <div className="job-c2-r3-item">{job.postedAt}</div>
                    <div className="job-c2-r3-item">&#8226;</div>
                    <div className="job-c2-r3-item">{job.contract}</div>
                    <div className="job-c2-r3-item">&#8226;</div>
                    <div className="job-c2-r3-item">{job.location}</div>
                </div>
            </div>
            <hr className="job-line" />
            <div className="job-column-3">
                <div onClick={() => store.dispatch(addFilter(job.level))} className="job-col3-row">{job.level}</div>
                <div onClick={() => store.dispatch(addFilter(job.role))} className="job-col3-row">{job.role}</div>
                {job.hasOwnProperty('tools') ? job.tools.map(tool => <div onClick={() => store.dispatch(addFilter(tool))} className="job-col3-row">{tool}</div>) : null}
                {job.hasOwnProperty('languages') ? job.languages.map(language => <div onClick={() => store.dispatch(addFilter(language))} className="job-col3-row">{language}</div>) : null}
            </div>
        </li>
    )

}

export default Job;