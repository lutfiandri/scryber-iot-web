export const week = 7 * 24 * 60 * 60 * 1000; // epoch (miliseconds)

export function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

export function getSundayThisWeek() {
  const today = new Date();
  // sunday index = 0
  const today00 = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const sundayTimeEpoch = today00 - today.getDay() * 24 * 60 * 60 * 1000;
  const sunday = new Date(sundayTimeEpoch);
  return sunday;
}
