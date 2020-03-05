function createResponse(error,data){
    const result = {}

    if(error){
        result['status'] = 'error'
        result['data'] = error
    }else{
        result['status'] = 'success'
        result['data'] = data
    }

    return result
}

module.exports = {
    createResponse : createResponse
}