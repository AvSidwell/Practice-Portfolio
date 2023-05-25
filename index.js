// education array of objects


let project = [
    {
      id: 1,
      date: "2023/04/25",
      gitHub: "https://animekaizoku.com/",
      netlify: "This netlify",
    },
    {
      id: 2,
      date: "2023/04/26",
      gitHub: "Latest certifacte",
      netlify: "This netlify",
    },
    {
      id: 3,
      date: "2023/04/26",
      gitHub: "Latest certifacte",
      netlify: "This netlify",
    },
    {
      id: 4,
      date: "2023/05/05",
      gitHub: "Lates",
      netlify: "This netlify",
    },
    {
      id: 5,
      date: "2023/05/12",
      gitHub: "Latest certifacte",
      netlify: "This netlify",
    },
  ];
  
  let dispProjects = document.querySelector(".project-sec");
  project.forEach((data) => {
    dispProjects.innerHTML += `
      <div class= "card">
      <h4 class="display-4">${data.date}</h4>
      <div class="card-body">
      <a href= class="text-white">${data.gitHub} @ <span>${data.netlify}</span></p>
      </div>
      </div>`;
  });