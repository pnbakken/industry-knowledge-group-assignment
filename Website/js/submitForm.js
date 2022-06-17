const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message-text");
const inputGroups = document.querySelectorAll(".input-group");
const successDiv = document.querySelector(".successDiv");


export const submitForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameValue = firstName.value.trim();
        const phoneValue = phone.value.trim();
        const messageValue = message.value.trim();
        const emailValue = email.value.trim();


        if (nameValue === "" || nameValue == null) {
            displayError(
                firstName,
                "Name needs to contain atleast 1 character"
            );
        } else {
            success(firstName);
        }
        if (messageValue === "" || messageValue == null) {
            displayError(
                message,
                "Message needs to contain at least 1 character"
            );
        } else {
            success(message);
        }
        if (validateEmail(emailValue) === false) {
            displayError(email, "Please write a valid email");
        } else {
            success(email);
        }
    });
};

const success = (element) => {
    const inputControl = element.parentElement;
    const errorDiv = inputControl.querySelector(".error");
    errorDiv.innerText = "";
};

const displayError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDiv = inputControl.querySelector(".error");
    errorDiv.innerText = message;
};

const validateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
};
