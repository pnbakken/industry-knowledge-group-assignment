const servicesData = [
    {
        title: "SEO",
        description: "The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.",
        icon: '<i class="fa-solid fa-chart-line " ></i>'

    },
    {
        title: "Social",
        description: "The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.",
        icon: '<i class="fa-solid fa-hashtag bg-error" ></i>'

    },
    {
        title: "Web Design",
        description: "The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.",
        icon: '<i class="fa-solid fa-laptop-code " ></i>'

    },
    {
        title: "Online Strategy",
        description: "The brown me quam, sagittis porttitor lorem vel, commodo fringilla nisl.",
        icon: '<i class="fa-solid fa-lightbulb" ></i>'

    },
]

export function renderServices() {


    const servicesRow = document.querySelector(".services-row");

    servicesData.forEach(data => {

        servicesRow.innerHTML += `<div class="col px-lg-6">
                                        <div class="card">
                                            <div class="icons">${data.icon}</div>
                                            <div>
                                                <h3 class="text-primary">${data.title}</h3>
                                                <p class="lead">${data.description}</p>
                                            </div>
                                        </div>
                                    </div>`
    })

}
