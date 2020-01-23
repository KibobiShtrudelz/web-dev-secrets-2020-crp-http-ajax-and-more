let url = 'https://jsonplaceholder.typicode.com/todos';

let customPost = {
    title: "Hello World!",
    body: "This is my story ... vomits ...",
    userID: 1
};

let customHeader = {
    "Content-Type": "application/json; charset=UTF-8"
};

fetch(url, {
    method: "POST",
    headers: customHeader,
    body: JSON.stringify(customPost)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));
