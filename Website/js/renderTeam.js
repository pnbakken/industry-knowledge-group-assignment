const teamData = [
    {
        name: "Ankit Soni",
        jobTitle: "Front-end developer",
        img: "/assets/images/team/ankit.jpg",
        alt: "Ankit Soni",

    },
    {
        name: "Pål Nicholas Bakken",
        jobTitle: "Front-end developer",
        img: "/assets/images/projects/project-2.jpg",
        alt: "Pål Nicholas Bakken",
    },
    {
        name: "Weronika Derkowska",
        jobTitle: "Front-end developer",
        img: "/assets/images/team/Weronika.jpg",
        alt: "Weronika Derkowska",
    },
    {
        name: "Aleksander Rezai",
        jobTitle: "Front-end developer",
        img: "/assets/images/projects/project-4.jpg",
        alt: "Aleksander Rezai",
    },
]

export function renderTeam() {
    const teamContainer = document.querySelector(".team-container");

    teamData.forEach(data => {

        teamContainer.innerHTML += `<div class="col-md-6 col-lg-3 my-2 mx-auto">
                                            <figure>
                                                <img src= ${data.img} alt=${data.alt} >
                                            </figure>
                                            <div class="position-relative text-center py-4 bg-white shadow" >
                                                <h4 editable="inline">${data.name}</h4>
                                                <p editable="inline" class="small">${data.jobTitle}</p>
                                                <div class="social-links">
                                                    <a href="#"> <i class="fa-brands fa-facebook-f"></i>
                                                    <a href="#"><i class="fa-brands fa-github"></i> </a>
                                                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>             
                                                </div>
                                            </div>
                                        </div>`
    })

}
