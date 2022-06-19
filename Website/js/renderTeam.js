const teamData = [
    {
        name: "Ankit Soni",
        jobTitle: "Front-end developer",
        img: "/assets/images/team/ankit.jpg",
        alt: "Ankit Soni",
        url: "",

    },
    {
        name: "Pål Nicholas Bakken",
        jobTitle: "Front-end developer",
        img: "/assets/images/projects/IMG_8869.jpg",
        alt: "Pål Nicholas Bakken",
        url: "https://snazzy-biscuit-4ece2a.netlify.app/",
    },
    {
        name: "Weronika Derkowska",
        jobTitle: "Front-end developer",
        img: "/assets/images/team/Weronika.jpg",
        alt: "Weronika Derkowska",
        url: "",
    },
    {
        name: "Aleksander Rezai",
        jobTitle: "Front-end developer",
        img: "/assets/images/projects/project-4.jpg",
        alt: "Aleksander Rezai",
        url:"",
    },
]

export function renderTeam() {
    const teamContainer = document.querySelector(".team-container");

    teamData.forEach(data => {

        teamContainer.innerHTML += `<div class="team-item">
                                            <figure>
                                                <img src= ${data.img} alt=${data.alt} >
                                            </figure>
                                            <div class=" text-center py-4 bg-white shadow" >
                                                <h4 >${data.name}</h4>
                                                <p  class="small">${data.jobTitle}</p>
                                                <a href="${data.url}">Portfolio</a>
                                                <div class="social-links">
                                                    <a href="#"> <i class="fa-brands fa-facebook-f"></i>
                                                    <a href="#"><i class="fa-brands fa-github"></i> </a>
                                                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>             
                                                </div>
                                            </div>
                                        </div>`
    })

}
