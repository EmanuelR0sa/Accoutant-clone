
/*const apiKey = 'ADD YOUR API KEY HERE';*/
const imageIds = ['2379004', '8424940', '3785104', '5668764', '8424884'];
const imageContainers = [
  document.getElementById('SectionThreePeople'),
  document.getElementById('SectionfourPeople01'),
  document.getElementById('SectionfourPeople02'),
  document.getElementById('SectionfourPeople03'),
  document.getElementById('SectionfourPeople04')
];

imageIds.forEach((imageId, index) => {
  fetch(`https://api.pexels.com/v1/photos/${imageId}`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.src.portrait;
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageContainers[index].appendChild(imageElement);
    })
    .catch(error => {
      console.error(error);
    });
});


/* image slider auto*/


let counter = 1;
setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 4000);


/* menu bar*/
const navEl= document.querySelector(".navMenusContainer");
const hamburgerEl= document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", ()=>{
  navEl.classList.toggle("navMenusContainer--open");
  hamburgerEl.classList.toggle("hamburger--open");
});


navEl.addEventListener("click", ()=>{
  navEl.classList.remove("navMenusContainer--open");
  hamburgerEl.classList.remove("hamburger--open");
});
