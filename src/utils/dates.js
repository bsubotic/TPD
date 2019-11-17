import dateFormat from "dateformat";

// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export const epochToDate = epoch => {
  let date = new Date(0);
  date.setUTCSeconds(epoch);
  return date;
};

export const isToday = someDate => isSameDayAs(new Date(), someDate);

export const isTomorrow = someDate =>
  isSameDayAs(new Date().addDays(1), someDate);

export const isSameDayAs = (refDate, compareDate) =>
  compareDate.getDate() === refDate.getDate() &&
  compareDate.getMonth() === refDate.getMonth() &&
  compareDate.getFullYear() === refDate.getFullYear();

//this is not proper formatting, done for speed
export const monthDay = date => dateFormat(date, "dd / mm");
