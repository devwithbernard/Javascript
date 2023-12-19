// Custom errors, extending Error

class CustomError extends Error{
    constructor(message) {
        super(message);
        this.name = 'Custom Error';
    }
}

class HttpError extends Error{
    constructor(message) {
        super(message);
        this.name = "HttpError";
        this.statusCode = 200;
    }
    static getErrorInfos(status){
        switch (status) {
            case(status === 404):
                return {
                    message: 'Data Not Found',
                    status: status
                }
            case(status === 500):
                return {
                    message: 'Server throws an internal error',
                    status: status
                }
            default:
                return {
                    message: 'Program occurs an error',
                    status: 402
                }
        }
    }
}

// ValidationError
class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError('No field name');
    }
    if(!user.age) {
        throw new ValidationError('No field age');
    }

    return user;
}


let json = `{ "name": "John", "age": 30 }`;

try {
    console.log(readUser(json));
}catch (error) {
    console.log(error?.message)
}