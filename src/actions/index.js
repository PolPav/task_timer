
export const startTime = (timer) => {
  alert("Start Timer");
  return{

    type: 'START_TIMER',
    data: timer,

  }
};

export const stopTime = () => {
  alert("Stop Timer");
  return{

    type: 'STOP_TIMER',

  }
};