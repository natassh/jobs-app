

const getTimeDifference = (date :any, ) => {


  const currentDate:number =  new Date().getTime();
  const dateTimestamp:number = new Date(date).getTime();;
  
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = currentDate - dateTimestamp;

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
//Math.floor
export { getTimeDifference };