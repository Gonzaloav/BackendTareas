
export function requestLog(request, response, next) {
    next();
    const {url, method } = request;
    console.log (url, method);
}

export function bodyLog(request, response, next) {
    next ();
    console.log ( request.body);
}