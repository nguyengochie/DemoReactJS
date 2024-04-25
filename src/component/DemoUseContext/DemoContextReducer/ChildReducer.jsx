import React, { useContext } from 'react';
import { JobContext } from './DemoContextReducer';

const ChildReducer = () => {
  const { jobs, setJob, job, addJob, deleteJob, completeJob } =
    useContext(JobContext);

  const handleChangeJob = (e) => {
    setJob(e.target.value);
  };

  const handleAddJob = () => {
    addJob(job);
  };

  const handleDeleteJob = (id) => {
    deleteJob(id);
  };
  const handleToggleComplete = (id) => {
    completeJob(id);
  };

  return (
    <div>
      <h1>Todo app</h1>
      <input onChange={handleChangeJob} value={job} />
      <button onClick={handleAddJob}>Add Job</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li
              key={index}
              style={{
                color: !!job.complete ? 'green' : 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              {job.name}
              <button onClick={() => handleToggleComplete(job.id)}>
                complete
              </button>
              <button onClick={() => handleDeleteJob(job.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChildReducer;
