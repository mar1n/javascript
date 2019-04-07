var Router = function()
{
    this.runRequest = runRequest;
    this.bind = bind;
    this.routers = [];
}

function bind(httpMethod, action, returnResult) {

    if(this.routers.length !== 0) {

        for(let x = 0; x < this.routers.length; x++) {
            if(this.routers[x].httpMethod === httpMethod && this.routers[x].action === action) {
                this.routers[x].returnResult = returnResult;
                return this.routers;
            }
        }
    }

    return this.routers.push({httpMethod, action, returnResult});
}

function runRequest(httpMethod, action) {
    for(let x of this.routers) {
        if(x.httpMethod === httpMethod && x.action === action) {
            return x.returnResult();
        }

    }
    return 'Error 404: Not Found';
}

let router = new Router();
router.bind('/hello', 'GET', function() { return 'hello world'; });
router.bind('/login', 'GET', function() { return 'Please log-in.'; });
console.log(router.runRequest('/hello', 'GET'));
console.log(router.runRequest('/login', 'GET'));
router.bind('/vote', 'POST', function() { return 'Voted.'; });
router.bind('/comment', 'POST', function() { return 'Comment sent.'; });
console.log(router.runRequest('/vote', 'POST'));
console.log(router.runRequest('/comment', 'POST'));
router.bind('/page', 'GET', function() { return 'First binding.'; });
router.bind('/page', 'GET', function() { return 'Modified binding.'; });
console.log(router.runRequest('/this-url-does-not-exist', 'GET'));
