// Step 1: set up our request
let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);

// Step 2: create a function to deal with the response when it's done
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // document.write('ALL DONE');
        // console.log(xhr.readyState, xhr.status);

        let data = JSON.parse(this.responseText)[0];
        document.write(JSON.stringify(data));
    }
};

// Step 3: open and send our request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
