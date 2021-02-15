const getJobDetail = (id:number) => {
    const endPoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`;
    const jobResponseObject = fetch(endPoint);
    const jobJsonPromise = jobResponseObject.then(res =>
      res.json()
    );
    const job = jobJsonPromise.then(data => data);
    return job;
  };
  
  export { getJobDetail };
