const getJobList = (description:string, location:string, fullTime:boolean) => {
    const endPoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=${fullTime}?description=${description}&location=${location}`;
    const jobsResponseObject = fetch(endPoint);
    const jobsJsonPromise = jobsResponseObject.then(res =>
      res.json()
    );
    const jobs = jobsJsonPromise.then(data => data);
    return jobs;
  };
  
  export { getJobList };