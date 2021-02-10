import React, { createContext, useState, useEffect} from 'react';
import {getJobList} from "../../../../core/services/jobs/getJobList"

type Job =  {} 

type JobContextProps = {
  jobs: Job[],
  // initJobList: Promise<boolean>,
  // initJobList: () =>  void,
}

type JobProviderProps = {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextProps>(undefined!);

const JobProvider: React.FC<JobProviderProps> = ({ children }) => {

  const [jobs, setJobs] = useState<Job[]>([]);
  console.log('jobs: ', jobs)
  
  useEffect(() => {
    initJobList();
  }, []);

  const initJobList = async () => {
    const jobList = await getJobList();
    setJobs(jobList);
  };


  return (
    <JobContext.Provider
      value={{
        jobs,
        
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;


// export type Task =  { 
//   text: string, 
//   active: boolean, 
//   completed: boolean, 
//   checked: boolean, 
//   id: number
// } 

// type TaskContextProps = {
//   filter: string,
//   tasks: Task[],
//   getTasksFiltered: () => Task[],
//   addTaskToList: (text: string) =>  void,
//   changeStatusTask: (task: Task) =>  void,
//   clearCompletedTasks: () => void,
//   filterChange: (text: string) =>  void,
//   deleteTask: (task: Task) =>  void,
// }

// type TasksProviderProps = {
//   children: React.ReactNode;
// }

// export const TaskContext = createContext<TaskContextProps>(undefined!);

// const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {

//   const [tasks, setTasks] = useState<Task[]>(getInitialState());