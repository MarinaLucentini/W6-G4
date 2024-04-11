const params = new URLSearchParams(window.location.search);
const id = params.get("photoId");
const imageDetails = document.getElementById("imageDetails");
const autore = document.getElementById("Autors");
const linkautore = document.getElementById("linkautors");
const background = document.querySelector("body");
console.dir(linkautore);
const URL = " https://api.pexels.com/v1/photos/" + id;
fetch(URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "TFx8T1Xapd7nVr41CyDiTQceYJN7D6o67PtgxLhq7pTnCU7FL6NTdqUq",
  },
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella fetch");
    }
  })
  .then((images) => {
    console.log(images);
    imageDetails.src = images.src.large;
    autore.innerText = images.photographer;
    linkautore.href = images.photographer_url;
    linkautore.innerText = images.photographer_url;
    background.style.background = images.avg_color;
  })

  .catch((err) => {
    console.log(err);
  });
