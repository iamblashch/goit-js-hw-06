const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListRef = document.querySelector("ul");
const element = images
  .map(function ({ url, alt }) {
    return `<li><img src = '${url}' alt = '${alt}'></li>`;
  })
  .join("");
galleryListRef.insertAdjacentHTML("afterbegin", element);

document.body.style.margin = "0px";

galleryListRef.style.cssText = `display: flex;
  background-position: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  `;
