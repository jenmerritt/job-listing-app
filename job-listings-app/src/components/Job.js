import React from 'react';
import './Job.css';

function Job({job}){

    return(
        <li className={job.featured ? "featured-job individual-job" : "individual-job"}>
            <div className="job-column-1">
                <img src={job.logo} />
            </div>
            <div className="job-column-2">
                <div className="job-col2-row1">
                    {job.new ? <div>New!</div> : null}
                    {job.featured ? <div>Featured</div> : null}
                </div>
                <div className="job-col2-row2">
                    {job.company}
                </div>
                <div className="job-col2-row3">
                    {job.postedAt}
                    {job.contract}
                    {job.location}
                </div>
            </div>
            <div className="job-column-3">
                {job.hasOwnProperty('tools') ? job.tools.map(tool => <div className="job-col3-row">{tool}</div>) : null}
                {job.hasOwnProperty('languages') ? job.languages.map(language => <div className="job-col3-row">{language}</div>) : null}
            </div>
            

        </li>
    )

}

export default Job;