/* eslint-disable no-plusplus */
import { week, getSundayThisWeek } from './time';

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'Mei',
  5: 'Jun',
  6: 'Jul',
  7: 'Agu',
  8: 'Sep',
  9: 'Okt',
  10: 'Nov',
  11: 'Des',
};

export function getAvg(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function parseFirebaseResponseToLabelsAndData(originData, dots = 6) {
  const stw = getSundayThisWeek(); // stw => sunday this week wkwkwk
  const data = {
    e_current: [],
    gas_produced: [],
    gas_used: [],
    humidity: [],
    ph: [],
    slurry_height: [],
    temperature: [],
    viscosity: [],
  };
  const labels = [];

  const reducer = (p) => (acc, cur) => acc.concat(cur[p]);

  const weeksToData = (dataThisWeek, p) => {
    const arrayData = dataThisWeek.reduce(reducer(p), []);
    data[p].push(getAvg(arrayData));
  };

  // loop: dots ... 3 2 1
  for (let i = dots; i > 0; --i) {
    const timeLimitPrev = stw - i * week; // (ms)
    const timeLimitNext = stw - (i - 1) * week; // (ms)
    const dataThisWeek = originData.filter(
      (doc) =>
        doc.created_at.seconds > timeLimitPrev / 1000 &&
        doc.created_at.seconds <= timeLimitNext / 1000
    );

    weeksToData(dataThisWeek, 'e_current');
    weeksToData(dataThisWeek, 'gas_produced');
    weeksToData(dataThisWeek, 'gas_used');
    weeksToData(dataThisWeek, 'humidity');
    weeksToData(dataThisWeek, 'ph');
    weeksToData(dataThisWeek, 'slurry_height');
    weeksToData(dataThisWeek, 'temperature');
    weeksToData(dataThisWeek, 'viscosity');

    // labels.push(new Date(timeLimitNext).toLocaleDateString('id-ID'));
    const realDate = new Date(timeLimitNext);
    const date = realDate.getDate();
    const month = months[realDate.getMonth()];
    labels.push(`${date} ${month}`);
  }

  // dougnut chart only need last 1 week
  data.ph = [data.ph[dots - 1], 14 - data.ph[dots - 1]];
  data.humidity = [data.humidity[dots - 1], 100 - data.humidity[dots - 1]]; // misal max humidity 100

  // console.log(data);

  return { data, labels };
}
