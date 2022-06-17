const testimoniesData = [
    {
        name: "Ankit Soni",
        jobTitle: "Sales Manager",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.",
        img: "/assets/images/testimonies/client-1.jpg",
        alt: "Ankit Soni",

    },
    {
        name: "Weronika Derkowska",
        jobTitle: "Lead designer",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.",
        img: "/assets/images/testimonies/client-2.jpg",
        alt: "Weronika Derkowska",
    },
    {
        name: "Pål Nicholas Bakken",
        jobTitle: "Tech lead",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.",
        img: "/assets/images/testimonies/client-3.jpg",
        alt: "Pål Nicholas Bakken",
    },

    {
        name: "Aleksander Rezai",
        jobTitle: "Marketing Manager",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus id ligula malesuada placerat sit amet quis enim. Aliquam erat volutpat. In pellentesque scelerisque auctor.",
        img: "/assets/images/testimonies/client-4.jpg",
        alt: "Aleksander Rezai",
    },
]

export function renderTestimonies() {
    const carouselItemContainer = document.querySelector(".carousel-item-container");

    testimoniesData.forEach(data => {

        carouselItemContainer.innerHTML += `<div class="carousel-item">
                                            <div class="avatarImages" style="background:url(${data.img}) no-repeat center; background-size:cover;"></div>
                                            <div class="row">
                                                <p>
                                                    ${data.comment}
                                                </p>
                                                <div>
                                                    <h5 >${data.name}</h5>
                                                    <small>${data.jobTitle}</small>
                                                </div>
                                            </div>
                                        </div>`
    })



}





