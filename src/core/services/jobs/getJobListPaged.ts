const getJobListPaged = (description:string, location:string, fullTime:any, pageNumber:number) => {
  if(fullTime === true) {
    fullTime = "on"
  } else {
    fullTime = "off"
  }
  // const endPoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=${fullTime}&description=${description}&location=${location}&page=${pageNumber}`;
  const endPoint = `https://fancy-forest-f96a.proxycoors.workers.dev/?https://jobs.github.com/positions.json?full_time=${fullTime}&description=${description}&location=${location}&page=${pageNumber}`;
  const jobsResponseObject = fetch(endPoint);
  const jobsJsonPromise = jobsResponseObject.then(res =>
    res.json()
  );
  const jobs = jobsJsonPromise.then(data => data);
  return jobs;
};

export { getJobListPaged };
