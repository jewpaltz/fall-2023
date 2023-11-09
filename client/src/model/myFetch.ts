/* B"H
*/

const API_ROOT = 'http://localhost:3000/api/v1';

export function rest(url: string, body?: unknown, method?: string){
    return fetch(url, {
        method: method ?? (body ? "POST" : "GET"),
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    })
        .then(response => response.ok 
            ? response.json()
            : response.json().then(err => Promise.reject(err))
        )

}

export function api(action: string, body?: unknown, method?: string){
    return rest(`${API_ROOT}/${action}`, body, method);
}



/*  Asynchronous patterns in JavaScript
    1. Callbacks
    2. Pipelining
    3. Promises
    4. Async/Await
*/