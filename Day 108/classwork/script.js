let date = new Date();
console.log(date);

date.setFullYear(2001);
date.setDate(11);
date.setMonth(9);
date.setHours(8);
date.setMinutes(14);
date.setMilliseconds(142);

let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth();
let hours = date.getHours();
let minutes = date.getMinutes();
let milliseconds = date.getMilliseconds();

console.log(
  `We don't talk about what happened on ${month}/${day}/${year} at exactly ${hours}:${minutes}.${milliseconds}`
);
