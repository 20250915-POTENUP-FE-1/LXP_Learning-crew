type Time = {
  hours?: number;
  minutes?: number;
  seconds: number;
};

const padTimeUnit = (unit: number): string => {
  return unit.toString().padStart(2, "0");
};

const secondsToTimeUnit = (seconds: number): Time => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) - hours * 60;
  const remainSeconds = seconds % 60;

  return {
    hours,
    minutes,
    seconds: remainSeconds,
  };
};

export { secondsToTimeUnit };
