const getJobList = () => {
  // const endPoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;
  const endPoint = `https://fancy-forest-f96a.proxycoors.workers.dev/?https://jobs.github.com/positions.json?`;
  const jobsResponseObject = fetch(endPoint);
  const jobsJsonPromise = jobsResponseObject.then(res =>
    res.json()
  );
  const jobs = jobsJsonPromise.then(data => data);
  return jobs;
};

export { getJobList };

