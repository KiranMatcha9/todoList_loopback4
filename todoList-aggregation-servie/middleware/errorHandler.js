const ResourceNotFound = require("../errors/resourceNotFound");
const validationError = require("../errors/validationError");

const ErrorHandler = (err,req,res,next)=> {
    // let customError = {
    //     // set default
    //     statusCode: err.statusCode || 500,
    //     msg: err.message || 'Something went wrong try again later',
    //   };

    // return res.status(customError.statusCode).json({msg:customError.msg});
    if (err instanceof validationError) {
        return res.status(400).json({ error: err })
      }

    if(err instanceof ResourceNotFound){
        return res.status(404).json({error:err})
    }

}

module.exports = ErrorHandler;