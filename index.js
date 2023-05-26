// education array of objects

let project = [
  {
    id: 1,
    image: "https://i.postimg.cc/sXVtP8n7/3.png",
    date: "2023/04/25",
    gitHub: "https://github.com/AvSidwell/my-profile",
    netlify: "https://gorgeous-squirrel-76d645.netlify.app",
  },

  {
    id: 2,
    date: "2023/04/26",
    image: "https://i.postimg.cc/66HNcWx3/2.png",
    gitHub: "https://github.com/AvSidwell/individual",
    netlify: "https://polite-youtiao-0243db.netlify.app",
  },
  {
    id: 3,
    date: "2023/05/05",
    image: "https://i.postimg.cc/15f1YkyK/5.png",
    gitHub: "https://github.com/gxotiweokuhle/groupwork",
    netlify: "https://iconnect-for-us.netlify.app/",
  },
  {
    id: 4,
    date: "2023/05/12",
    image: "https://i.postimg.cc/bvPM8WfW/4.png",
    gitHub: "https://github.com/AvSidwell/Streaming-webpage",
    netlify: "https://jolly-semifreddo-0b84d1.netlify.app",
  },
  {
    id: 5,
    date: "2023/05/12",
    image: "https://i.postimg.cc/qqZVvLxn/6.png",
    gitHub: "https://github.com/AvSidwell/CV",
    netlify: "https://vocal-gumdrop-cb2f20.netlify.app",
  },
];

let dispProjects = document.querySelector(".project-sec");
project.forEach((data) => {
  dispProjects.innerHTML += `
      <div class= "card format p-2 m-1">
      <img src="${data.image}" class="img1">
      <div class="card-body"> 
      <p class="text-white text-center fw-bold p-style mb-1">${data.date}</p>
      <a href="${data.gitHub}" target="_blank" class="anchor btn btn-dark center bg-primary"><?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="25" width="25" id="Layer_1" style="enable-background:new 0 0 67 67;" version="1.1" viewBox="0 0 67 67" width="67px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M21.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.513c-0.654,0.488-1.44,1.415-1.549,2.486c-0.823,0.522-2.478,0.695-3.764,0.297  c-1.803-0.56-2.493-4.067-5.192-3.567c-0.584,0.108-0.468,0.486,0.037,0.809c0.823,0.522,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.982,4.473,2.982c1.21,0,2.058-0.144,2.058-0.144s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.232,0.557,0.255,1.004,0.255c0.884,0,2.723-0.726,2.723-1.998c0-1.011,0.017-4.411,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.941-0.169,7.872c-0.302,1.094-0.847,0.938-0.847,1.427c0,0.726,2.214,0.178,2.948-1.416c0.567-1.24,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.122,3.342,0.77,4.222c0.586,0.578,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.12  c0.645,0.222,2.025,0.281,2.09-0.091c0.065-0.373-1.662-0.927-1.678-2.085c-0.01-0.706,0.032-1.118,0.032-4.186  c0-3.068-0.419-4.202-1.88-5.105c4.508-0.456,7.299-1.552,8.658-4.487c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.972c-0.008-4.209-2.058-5.698-2.451-6.397c0.58-3.187-0.098-4.638-0.412-5.135  c-1.162-0.406-4.041,1.044-5.615,2.066c-2.564-0.736-7.986-0.666-10.019,0.19c-3.751-2.64-5.736-2.235-5.736-2.235  s-1.283,2.26-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C20.906,31.83,21.102,33.292,21.543,34.568z M33.5,1l28.146,16.25  v32.5L33.5,66L5.354,49.75v-32.5L33.5,1z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#010101;"/></svg></a>
      <a href="${data.netlify}"target="_blank" class="anchor btn btn-dark center bg-primary mt-1"><?xml version="1.0" ?><svg fill="none" height="25" viewBox="0 0 15 15" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 0.146447C7.34172 -0.0488155 7.6583 -0.0488155 7.85356 0.146447L8.83363 1.12651L7.01342 4.06685L4.30815 2.98475L7.14645 0.146447Z" fill="black"/><path d="M3.53884 3.75406L2.42638 4.86652L4.71994 7.7717L6.47901 4.93012L3.53884 3.75406Z" fill="black"/><path d="M1.7144 5.5785L0.146455 7.14645C0.12315 7.16975 0.102626 7.19478 0.0848846 7.22113L3.60707 7.97589L1.7144 5.5785Z" fill="black"/><path d="M0.659968 8.36707L1.66655 9.37365L2.84238 8.83473L0.659968 8.36707Z" fill="black"/><path d="M2.42086 10.128L2.93996 10.6471L3.59422 9.59016L2.42086 10.128Z" fill="black"/><path d="M3.66637 11.3735L7.14645 14.8536C7.34172 15.0488 7.6583 15.0488 7.85356 14.8536L8.17746 14.5297L8.2957 13.9148L4.81919 9.51124L3.66637 11.3735Z" fill="black"/><path d="M9.43824 13.2689L11.9259 10.7812L9.99616 10.3677L9.43824 13.2689Z" fill="black"/><path d="M12.7681 9.93897L14.549 8.15812L10.7159 6.62489L10.185 9.38545L12.7681 9.93897Z" fill="black"/><path d="M14.9209 7.22983C14.9018 7.20028 14.8794 7.1723 14.8536 7.14645L12.9906 5.28349L11.6226 5.91051L14.9209 7.22983Z" fill="black"/><path d="M12.2363 4.52918L11.2992 3.59205L11.0109 5.0908L12.2363 4.52918Z" fill="black"/><path d="M10.4451 2.73797L9.56004 1.85293L7.9561 4.44392L9.96267 5.24655L10.4451 2.73797Z" fill="black"/><path d="M5.9983 8.48829L9.6622 6.80901L9.20703 9.17588L5.9983 8.48829Z" fill="black"/><path d="M6.11237 9.53544L9.01814 10.1581L8.54526 12.6171L6.11237 9.53544Z" fill="black"/><path d="M6.18693 7.30181L9.08617 5.97299L7.42169 5.3072L6.18693 7.30181Z" fill="black"/></svg></a>

      </div>
      </div>`;
});

let test = [
  {
    img: "https://i.postimg.cc/qqZVvLxn/6.png",
    heding: "Waydin Jochem",
    title: "",
    text: "Sidwell is a vibrant and charismatic individual, who oftentimes finds himself taking a lead role",
  },
  {
    img: "https://i.postimg.cc/qqZVvLxn/6.png",
    heding: "Jamie-Lee Kinnear",
    title: "",
    text: "Sidwell is a remarkable programmer and has an analytical approach to problem solving. He is a hardworking individual and dedicated to his work.",
  },
  {
    img: "https://i.postimg.cc/qqZVvLxn/6.png",
    heding: "Asiphe Ndimlana",
    title: "",
    text: "As an IT professional, Sidwell embodies dedication and excellence. He never fails to exceed expectations and possesses a remarkable work ethic alongside unparalleled proficiency in technical matters.",
  },
  {
    img: "https://i.postimg.cc/qqZVvLxn/6.png",
    heding: "Xola Bongaza",
    title: "",
    text: "Sidwell is great logical thinker, pays attention to detail and isnt",
  },
];

let disTestimonials = document.querySelector(".testimonial-sec");
test.forEach((test) => {
  disTestimonials.innerHTML += `
<div class="row p-1 m-auto test-1">
    <div class="col-12 col-md-6 col-sm-6 test-2">
        <div class="card m-1 test-3 p-1">
            <img src="${test.img}" class="p-img-s m-2" alt="" loading="lazy">
                <div class="card-img-overlay text-center">
                    <h5>${test.heading}</h5>
                </div>
            </div>
        <div class="card-body">
            <h5 class="card-title">${test.title}</h5>
            <p class="card-text">${test.text}</p>
        </div>
        </div>
        </div>
    </div>
</div>     
`;
});
