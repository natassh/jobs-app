const getJobListPaged = async (description:string, location:string, fullTime:any, pageNumber:number) => {
  if(fullTime === true) {
    fullTime = "on"
  } else {
    fullTime = "off"
  }
  const endPoint = `https://fancy-forest-f96a.proxycoors.workers.dev/?https://jobs.github.com/positions.json?full_time=${fullTime}&description=${description}&location=${location}&page=${pageNumber}`;
  const jobsResponseObject = await fetch(endPoint);
  const jobsData = await jobsResponseObject.json();
  return jobsData;
};

export { getJobListPaged };
