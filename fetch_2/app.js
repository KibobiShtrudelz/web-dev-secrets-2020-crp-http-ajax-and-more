const url = "https://randomuser.me/api/";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("data.results[0]", data.results[0]);
    const user = data.results[0];
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = user.picture.large;
    p.innerHTML = `${user.name.first} ${user.name.last}`;

    const ul = document.getElementById("user");

    li.appendChild(img);
    li.appendChild(p);
    ul.appendChild(li);
  })
  .catch(err => console.log(err));
