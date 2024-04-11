const btnPrimo = document.getElementById("prima-img");
const btnSecondo = document.getElementById("seconda-img");
const BtnCerca = document.getElementById("cerca");
const inputCerca = document.getElementById("inputUserSearch");
const createModal = (image, title) => {
  const imgModal = document.getElementById("modalImg");
  const labelModal = document.getElementById("titleModal");
  imgModal.src = image;
  labelModal.innerText = title;
};
const changeUrl = (valueUrl) => {
  const URL = `https://api.pexels.com/v1/search?query=${valueUrl}`;
  const row = document.getElementById("card");
  row.innerHTML = " ";
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
        idImage.innerText = element.id;
        BtnView.setAttribute("data-bs-toggle", "modal");
        BtnView.setAttribute("data-bs-target", "#ImageModal");

        BtnHide.addEventListener("click", () => {
          col.remove();
        });
        BtnView.addEventListener("click", () => {
          createModal(element.src.medium, element.alt);
        });

        image.addEventListener("click", (event, id) => {
          id = element.id;
          event.Target;
          window.location.assign("./details.html?photoId=" + id);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

window.addEventListener("DOMContentLoaded", () => {
  btnSecondo.addEventListener("click", (e) => {
    changeUrl("dog");
  });
  btnPrimo.addEventListener("click", (e) => {
    changeUrl("cat");
  });
  BtnCerca.addEventListener("click", (e) => {
    changeUrl(inputCerca.value);
  });
});
