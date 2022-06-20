const projectsData = [
    {
        img: "/assets/images/projects/project-1.jpg",
        alt: "image of project 1"
    },
    {
        img: "/assets/images/projects/project-2.jpg",
        alt: "image of project 2"
    },
    {
        img: "/assets/images/projects/project-3.jpg",
        alt: "image of project 3"
    },
    {
        img: "/assets/images/projects/project-4.jpg",
        alt: "image of project 4"
    },
    {
        img: "/assets/images/projects/project-5.jpg",
        alt: "image of project 5"
    },
    {
        img: "/assets/images/projects/project-6.jpg",
        alt: "image of project 6"
    },
]

export function renderPortfolio() {
    const projectsContainer = document.querySelector(".projects");

    let tracker = 0;
    projectsData.forEach(data => {

        let direction = (tracker % 2 === 0) ? "up" : "right";

        projectsContainer.innerHTML += `<figure class="col-md-4" data-aos="fade-${direction}" data-aos-duration="800">
                                            <img src=${data.img} alt=${data.alt}/>
                                        </figure>`;

        tracker++;
    })

}
