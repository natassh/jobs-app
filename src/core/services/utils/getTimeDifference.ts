const getTimeDifference = (current:any, previous: any) => {
  
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' s ago';   
  }

  else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + ' m ago';   
  }

  else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' h ago';   
  }

  else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' d ago';   
  }

  else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' mo ago';   
  }

  else {
      return Math.round(elapsed/msPerYear ) + ' y ago';   
  }
}

export { getTimeDifference };