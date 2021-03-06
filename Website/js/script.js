import { renderServices } from "./renderServices.js";
import { renderPortfolio } from "./renderPortfolio.js";
import { renderTeam } from "./renderTeam.js";
import { renderTestimonies } from "./renderTestimonies.js";
import { scrollToTopBtn } from "./scrollToTopBtn.js";
import { submitForm } from "./submitForm.js";

scrollToTopBtn();
renderPortfolio();
renderServices();
renderTeam();
renderTestimonies();
submitForm();