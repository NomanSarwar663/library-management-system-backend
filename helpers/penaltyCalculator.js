var moment = require("moment-business-days");

// put the holidays (MM-DD) in this array so they can be exclude while calculating the late penalty
const holidays = [
  "02/05", // Kashmir day
  "03/23", // Pakistan Day
  "04/04", // Death of Zulfiqar Ali Bhutto
  "05/01", // Labour Day
  "08/14", // Independence day
  "12/25", // Quaid-e-Azam day
  "12/27"  // Anniversary of Benazir Bhutto's Death
];

moment.updateLocale("us", {
  holidays,
  holidayFormat: "MM/DD",
});

const dateFormat = "MM/DD/YYYY";

const calculatePenalty = (actualDate, requiredReturnDate) => {
  var totalLates = moment(actualDate, dateFormat).businessDiff(
    moment(requiredReturnDate, dateFormat), true
  );

  return totalLates;
};

module.exports = {
  calculatePenalty,
};
