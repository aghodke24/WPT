function getWeekDay(date) {
    const options = { weekday: "short" };
    return date.toLocaleString("en-US", options);
  }
  alert(getWeekDay(new Date()))
  console.log(getWeekDay(new Date()));