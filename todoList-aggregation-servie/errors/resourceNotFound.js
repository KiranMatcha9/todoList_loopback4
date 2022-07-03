class ResourceNotFound extends Error{
    constructor(resource){
        super()
        this.name = "resourceNotFound"
        this.resource = resource
    }
}
module.exports = ResourceNotFound;