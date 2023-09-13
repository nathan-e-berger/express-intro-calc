"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {

  return strNums.split(",").map(num => {
    if(!Number(num)){
      throw new BadRequestError(`${num} is not a number`);
    }
    return Number(num);
  })
}


module.exports = { convertStrNums };