const projectsData = [
    {
        img: "/assets/images/projects/project-1.jpg",
        alt: ""
    },
    {
        img: "/assets/images/projects/project-2.jpg",
        alt: ""
    },
    {
        img: "/assets/images/projects/project-3.jpg",
        alt: ""
    },
    {
        img: "/assets/images/projects/project-4.jpg",
        alt: ""
    },
    {
        img: "/assets/images/projects/project-5.jpg",
        alt: ""
    },
    {
        img: "/assets/images/projects/project-6.jpg",
        alt: ""
    },
]

export function renderPortfolio() {
    const projectsContainer = document.querySelector(".projects");

    projectsData.forEach(data => {

        projectsContainer.innerHTML += `<figure class="col-md-4">
                                            <img src=${data.img} alt=${data.alt} />
                                        </figure>`
    })

}
