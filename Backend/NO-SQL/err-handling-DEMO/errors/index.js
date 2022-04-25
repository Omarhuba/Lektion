class HTTPException extends Error{
    constructor (status, message){
        super(message)
        this.status = status
    }
}


class ResourceNotFoundError extends HTTPException {
    constructor (resourceName, id){
        super(404, `${resourceName} with ${id} not found`)
    }
}

module.exports = {ResourceNotFoundError, HTTPException}