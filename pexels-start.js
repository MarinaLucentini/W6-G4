const btnPrimo = document.getElementById("prima-img");
const btnSecondo = document.getElementById("seconda-img");
const BtnCerca = document.getElementById("cerca");
const inputCerca = document.getElementById("inputUserSearch");

window.addEventListener("DOMContentLoaded", () => {
  btnSecondo.addEventListener("click", (e) => {
    const URL = `https://api.pexels.com/v1/search?query=dog`;
    const row = document.getElementById("card");
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "TFx8T1Xapd7nVr41CyDiTQceYJN7D6o67PtgxLhq7pTnCU7FL6NTdqUq",
      },
    })
      .then((response) => {
        //   console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((images) => {
        //   console.log(images);
        //   const images
        images.photos.forEach((element) => {
          // console.log(element);
          const col = document.createElement("div");
          col.classList.add("col");
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow-sm");
          const image = document.createElement("img");
          image.classList.add("bd-placeholder-img", "card-img-top");
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title");
          const cardText = document.createElement("p");
          cardText.classList.add("card-text");
          const cardBody2 = document.createElement("div");
          cardBody2.classList.add(
            "d-flex",
            "justify-content-between",
            "align-items-center"
          );
          const cardContainerBtn = document.createElement("div");
          cardContainerBtn.classList.add("btn-group");
          const BtnView = document.createElement("button");
          BtnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const BtnHide = document.createElement("button");
          BtnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const idImage = document.createElement("small");
          idImage.classList.add("text-muted");

          row.append(col);
          col.appendChild(card);
          card.append(image, cardBody);
          cardBody.append(cardTitle, cardText, cardBody2);
          cardBody2.append(cardContainerBtn, idImage);
          cardContainerBtn.append(BtnHide, BtnView);
          image.src = element.src.small;
          cardTitle.innerText = element.alt;
          cardText.innerText = element.photographer;
          BtnView.innerText = "View";
          BtnHide.innerText = "Hide";
          idImage.innerText = element.id;
          BtnHide.addEventListener("click", () => {
            col.remove();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  btnPrimo.addEventListener("click", (e) => {
    const URL = `https://api.pexels.com/v1/search?query=cat`;
    const row = document.getElementById("card");
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "TFx8T1Xapd7nVr41CyDiTQceYJN7D6o67PtgxLhq7pTnCU7FL6NTdqUq",
      },
    })
      .then((response) => {
        //   console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((images) => {
        //   console.log(images);
        //   const images
        images.photos.forEach((element) => {
          // console.log(element);
          const col = document.createElement("div");
          col.classList.add("col");
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow-sm");
          const image = document.createElement("img");
          image.classList.add("bd-placeholder-img", "card-img-top");
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title");
          const cardText = document.createElement("p");
          cardText.classList.add("card-text");
          const cardBody2 = document.createElement("div");
          cardBody2.classList.add(
            "d-flex",
            "justify-content-between",
            "align-items-center"
          );
          const cardContainerBtn = document.createElement("div");
          cardContainerBtn.classList.add("btn-group");
          const BtnView = document.createElement("button");
          BtnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const BtnHide = document.createElement("button");
          BtnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const idImage = document.createElement("small");
          idImage.classList.add("text-muted");

          row.append(col);
          col.appendChild(card);
          card.append(image, cardBody);
          cardBody.append(cardTitle, cardText, cardBody2);
          cardBody2.append(cardContainerBtn, idImage);
          cardContainerBtn.append(BtnHide, BtnView);
          image.src = element.src.small;
          cardTitle.innerText = element.alt;
          cardText.innerText = element.photographer;
          BtnView.innerText = "View";
          BtnHide.innerText = "Hide";
          idImage.innerText = element.id;
          BtnHide.addEventListener("click", () => {
            col.remove();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  BtnCerca.addEventListener("click", (e) => {
    const URL = `https://api.pexels.com/v1/search?query=${inputCerca.value}`;
    const row = document.getElementById("card");
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "TFx8T1Xapd7nVr41CyDiTQceYJN7D6o67PtgxLhq7pTnCU7FL6NTdqUq",
      },
    })
      .then((response) => {
        //   console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((images) => {
        //   console.log(images);
        //   const images
        images.photos.forEach((element) => {
          // console.log(element);
          const col = document.createElement("div");
          col.classList.add("col");
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow-sm");
          const image = document.createElement("img");
          image.classList.add("bd-placeholder-img", "card-img-top");
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          const cardTitle = document.createElement("h5");
          cardTitle.classList.add("card-title");
          const cardText = document.createElement("p");
          cardText.classList.add("card-text");
          const cardBody2 = document.createElement("div");
          cardBody2.classList.add(
            "d-flex",
            "justify-content-between",
            "align-items-center"
          );
          const cardContainerBtn = document.createElement("div");
          cardContainerBtn.classList.add("btn-group");
          const BtnView = document.createElement("button");
          BtnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const BtnHide = document.createElement("button");
          BtnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
          const idImage = document.createElement("small");
          idImage.classList.add("text-muted");

          row.append(col);
          col.appendChild(card);
          card.append(image, cardBody);
          cardBody.append(cardTitle, cardText, cardBody2);
          cardBody2.append(cardContainerBtn, idImage);
          cardContainerBtn.append(BtnHide, BtnView);
          image.src = element.src.small;
          cardTitle.innerText = element.alt;
          cardText.innerText = element.photographer;
          BtnView.innerText = "View";
          BtnHide.innerText = "Hide";
          idImage.innerText = element.id;
          BtnHide.addEventListener("click", () => {
            col.remove();
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
