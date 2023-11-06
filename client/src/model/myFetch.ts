/* B"H
*/

const API_ROOT = 'http://localhost:3000/api/v1';

export function rest(url: string){
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function api(action: string){
    return rest(`${API_ROOT}/${action}`);
}



/*  Asynchronous patterns in JavaScript
    1. Callbacks
    2. Pipelining
    3. Promises
    4. Async/Await
*/