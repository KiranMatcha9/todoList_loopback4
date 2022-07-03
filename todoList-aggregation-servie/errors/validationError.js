class validationError extends Error{
    constructor(invalidFields){
        super()
        this.name = "validation fields"
        this.invalidFields = invalidFields
    }
}

module.exports = validationError;