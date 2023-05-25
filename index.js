// education array of objects


let project = [
    {
        id: 1,
        image: "./Assets/images/4.jpg",
        date: "2023/04/25",
        gitHub: '1   ',
        netlify: "2   ",
    },
    {
        id: 2,
        date: "2023/04/26",
        image: "./Assets/images/4.jpg",
        gitHub: "1   " ,
        netlify: "2   ",
    },
    {
        id: 3,
        date: "2023/04/26",
        image: "./Assets/images/4.jpg",
        gitHub: "1   ",
        netlify: "2",
    },
    {
        id: 4,
        date: "2023/05/05",
        image: "./Assets/images/4.jpg",
        gitHub: "1   ",
        netlify: "2   ",
    },
    {
        id: 5,
        date: "2023/05/12",
        image: "./Assets/images/4.jpg",
        gitHub: "git   ",
        netlify: "2   ",
        img: 9,
    },
];

let dispProjects = document.querySelector(".project-sec");
project.forEach((data) => {
    dispProjects.innerHTML += `
      <div class= "card">
      <img src="${data.image}" class="img1">
      <div class="card-body">
      <a href="${data.gituhub}" class="anchor btn btn-light"></a>
      <a href="${data.netlify}" class="anchor btn btn-light"></a>
      <p class="text-white">${data.id}</p>
      </div>
      </div>`;
}); 