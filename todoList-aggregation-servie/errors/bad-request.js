const CustomError = require("./customError");

class badRequest extends CustomError {
    constructor(message){
        super(message)
    }
};

module.exports = badRequest;
