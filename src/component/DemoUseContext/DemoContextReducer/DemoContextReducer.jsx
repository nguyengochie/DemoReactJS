import React, { createContext, useReducer } from 'react';
import { idGenerator } from '../../ultils/helper';
import ChildReducer from './ChildReducer';

const initState = {
  job: '',
  jobs: [],
};

const ACTIONS = {
  SET_JOB: 'SET_JOB',
  ADD_JOB: 'ADD_JOB',
  DELETE_JOB: 'DELETE_JOB',
  COMPLETE_JOB: 'COMPLETE_JOB',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ACTIONS.ADD_JOB:
      return {
        ...state,
        job: '',
        jobs: [...state.jobs, { id: idGenerator(), name: action.payload }],
      };
    case ACTIONS.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case ACTIONS.COMPLETE_JOB:
      const newJobs = state.jobs.map((job) => {
        if (job.id === action.payload) {
          return { ...job, complete: !job.complete };
        }
        return { ...job };
      });

      return { ...state, jobs: newJobs };

    default:
      return { ...state };
  }
};

const logger = (todoReducer) => {
  return (prevState, action) => {
    console.group(action.type);
    console.log('PrevState:', prevState);
    console.log('Action:', action);

    const nextState = todoReducer(prevState, action);
    console.log('NextState:', nextState);
    console.groupEnd();
    return nextState;
  };
};

export const JobContext = createContext(initState);

const DemoContextReducer = () => {
  const [state, dispatch] = useReducer(logger(todoReducer), initState);

  const setter = {
    setJob: (job) => dispatch({ type: ACTIONS.SET_JOB, payload: job }),
    addJob: (job) => dispatch({ type: ACTIONS.ADD_JOB, payload: job }),
    deleteJob: (id) => dispatch({ type: ACTIONS.DELETE_JOB, payload: id }),
    completeJob: (id) => dispatch({ type: ACTIONS.COMPLETE_JOB, payload: id }),
  };

  return (
    <JobContext.Provider value={{ ...state, ...setter }}>
      <ChildReducer />
    </JobContext.Provider>
  );
};

export default DemoContextReducer;
