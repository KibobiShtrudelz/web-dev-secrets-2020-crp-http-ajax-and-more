function requestListener() {
  console.log("this is what the request NOW looks like", this);

  let data = JSON.parse(this.responseText);
  console.log("the response is converted to json", data);
  let user = data.results[0];
  console.log("the user looks like", user);

  let fname = user.name.first;
  let lname = user.name.last;
  let src = user.picture.large;

  let li = document.createElement("li");
  let img = document.createElement("img");
  let p = document.createElement("p");

  img.src = src;
  p.innerHTML = `${fname} ${lname}`;

  document.getElementById("user").appendChild(li);
  li.appendChild(img);
  li.appendChild(p);
}

function requestError() {
  console.log("oops, i did it again");
}

let url = "https://randomuser.me/api/";
let method = "GET";

let xhr = new XMLHttpRequest();
console.log(xhr);

// open a connection
xhr.open(method, url, true);

xhr.onload = requestListener;

xhr.onerror = requestError;

xhr.send();
