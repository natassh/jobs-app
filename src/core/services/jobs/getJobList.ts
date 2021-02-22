 import list from "../list.json"
const getJobList = (description:string, location:string, fullTime:boolean, pageNumber:number) => {
  // const endPoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=${fullTime}&description=${description}&location=${location}&page=${pageNumber}`;
  // const jobsResponseObject = fetch(endPoint);
  // const jobsJsonPromise = jobsResponseObject.then(res =>
  //   res.json()
  // );
  // const jobs = jobsJsonPromise.then(data => data);
  // return jobs;
   return list
};

export { getJobList };
