const getJobList = async() => {
  const endPoint = `https://fancy-forest-f96a.proxycoors.workers.dev/?https://jobs.github.com/positions.json?`;
  const jobsResponseObject = await fetch(endPoint);
  const jobsData = await jobsResponseObject.json();
  return jobsData;
};

export { getJobList };
