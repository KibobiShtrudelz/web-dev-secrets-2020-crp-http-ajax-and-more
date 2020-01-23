let getData = function(url, callback) {
    // Step 1: creating the XMLHttpRequest
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = 'json';

    // Step 2: using onload() method witch triggers on success
    xhr.onload = () => {
        let status = xhr.status;

        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    // Step 3: send the request
    xhr.send();
};

getData('http://time.jsontest.com', (error, data) => {
    if (error !== null) {
        console.log('OOPS', error);
    } else {
        let txt = ` at ${data.time}`;
        document.getElementsByTagName('h1')[0].append(txt);
    }
});
