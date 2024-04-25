import React, { useReducer } from 'react';
import { idGenerator } from '../ultils/helper';

const ACTIONS = {
  ADD_JOB: 'ADD_JOB',
  SET_JOB: 'SET_JOB',
  DELETE_JOB: 'DELETE_JOB',
  TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
};

const initState = {
  job: '',
  jobs: [],
};

const toDoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_JOB:
      return { ...state, job: action.payload };
    case ACTIONS.ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case ACTIONS.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case ACTIONS.TOGGLE_COMPLETE:
      const newJobs = state.jobs.map((job) => {
        if (job.id === action.payload) {
          return { ...job, complete: !job.complete };
        }
        return job;
      });

      return {
        ...state,
        jobs: newJobs,
      };
    default:
      break;
  }
};

const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(toDoReducer, initState);
  const { jobs, job } = state;

  const handleChangeJob = (e) => {
    dispatch({ type: ACTIONS.SET_JOB, payload: e.target.value });
  };
  const handleAddJob = (e) => {
    dispatch({
      type: ACTIONS.ADD_JOB,
      payload: { name: job, id: idGenerator() },
    });
  };

  const handleDeleteJob = (id) => {
    dispatch({
      type: ACTIONS.DELETE_JOB,
      payload: id,
    });
  };
  const handleToggleComplete = (id) => {
    dispatch({
      type: ACTIONS.TOGGLE_COMPLETE,
      payload: id,
    });
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
              style={{ color: !!job.complete ? 'green' : 'black' }}
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

export default DemoUseReducer;
