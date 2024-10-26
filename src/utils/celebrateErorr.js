const  { isCelebrateError } = require('celebrate');
const { StatusCodes } = require('http-status-codes');


const celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const errorBody = err.details.get('body') || err.details.get('query');
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: errorBody.details[0].message,
      validation: errorBody.details[0]
    });
  }

  return next(err);
};
module.exports = celebrateErrorHandler;